const router = require("express").Router();
const restaurantController = require('../controllers/restaurantController');

router.get('/restaurant', restaurantController.getRestaurants);
router.get('/restaurant/:id', restaurantController.getRestaurantById);

module.exports = router;