const Restaurant = require("../models/restaurant");
const { Op } = require("sequelize");
const { paginate } = require("../utils/pagination");

const getRestaurants = async (req, res) => {
  try {
    const { 
      category, 
      area, 
      search, 
      sortBy = 'name', 
      order = 'ASC',
      minPrice,
      maxPrice,
      rating,
      page = 1,
      limit = 10
    } = req.query;

    const query = {};
    
    if (category) query.category = category;
    if (area) query.area = area;
    
    if (search) {
      query[Op.or] = [
        { name: { [Op.like]: `%${search}%` } },
        { category: { [Op.like]: `%${search}%` } },
      ];
    }

    if (minPrice || maxPrice) {
      query.price_range = {};
      if (minPrice) query.price_range[Op.gte] = parseFloat(minPrice);
      if (maxPrice) query.price_range[Op.lte] = parseFloat(maxPrice);
    }

    if (rating) {
      query.rating = { [Op.gte]: parseFloat(rating) };
    }

    const validSortFields = ['name', 'price_range', 'rating', 'createdAt', 'updatedAt'];
    const validSortOrders = ['ASC', 'DESC'];
    
    const finalSortBy = validSortFields.includes(sortBy) ? sortBy : 'name';
    const finalOrder = validSortOrders.includes(order.toUpperCase()) 
      ? order.toUpperCase() 
      : 'ASC';

    const totalData = await Restaurant.count({ where: query });

    const pagination = paginate(page, limit, totalData);

    const restaurants = await Restaurant.findAll({
      where: query,
      order: [[finalSortBy, finalOrder]],
      limit: pagination.limit,    
      offset: pagination.offset,   
      paranoid: false,
    });

    res.json({
      success: true,
      message: "Data retrieved successfully",
      data: {
        ...pagination.data,        
        sortBy: finalSortBy,
        order: finalOrder.toLowerCase(),
        ...(search && { search }),
        ...(category && { category }),
        ...(area && { area }),
        ...(rating && { rating }),
        content: restaurants
      },
    });

  } catch (error) {
    console.error("Error fetching restaurants:", error.message);
    res.status(500).json({ 
      success: false,
      message: "An error occurred while fetching restaurants.",
      data: null
    });
  }
};

const getRestaurantById = async (req, res) => {
  const { id } = req.params;
  try {
    const restaurant = await Restaurant.findByPk(id);
    
    if (!restaurant) {
      return res.status(404).json({
        success: false,
        message: "Restaurant not found",
        data: null,
      });
    }

    res.json({
      success: true,
      message: "Data retrieved successfully",
      data: restaurant,
    });
    
  } catch (error) {
    console.error("Error fetching restaurant:", error.message);
    res.status(500).json({ 
      success: false,
      message: "An error occurred while fetching restaurant.",
      data: null
    });
  }
};

module.exports = { getRestaurants, getRestaurantById };