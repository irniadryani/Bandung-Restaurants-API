const router = require("express").Router();
const restaurantController = require('../controllers/restaurantController');

/**
 * @swagger
 * /restaurant:
 *   get:
 *     summary: Get restaurants with pagination, filtering, sorting, and search
 *     tags: [Restaurants]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 10
 *         description: Number of items per page
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *           example: sate
 *         description: Search by restaurant name or category
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *           example: Indonesian
 *         description: Filter by restaurant category
 *       - in: query
 *         name: area
 *         schema:
 *           type: string
 *           example: Bandung
 *         description: Filter by area
 *       - in: query
 *         name: minPrice
 *         schema:
 *           type: number
 *           example: 20000
 *         description: Minimum price
 *       - in: query
 *         name: maxPrice
 *         schema:
 *           type: number
 *           example: 50000
 *         description: Maximum price
 *       - in: query
 *         name: rating
 *         schema:
 *           type: number
 *           example: 4
 *         description: Minimum rating
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           enum: [name, price_range, rating, createdAt, updatedAt]
 *           example: name
 *         description: Field to sort by
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           enum: [ASC, DESC]
 *           example: ASC
 *         description: Sort order
 *     responses:
 *       200:
 *         description: Restaurants retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Data retrieved successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     currentPage:
 *                       type: integer
 *                       example: 1
 *                     totalPages:
 *                       type: integer
 *                       example: 5
 *                     totalItems:
 *                       type: integer
 *                       example: 50
 *                     sortBy:
 *                       type: string
 *                       example: name
 *                     order:
 *                       type: string
 *                       example: asc
 *                     content:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Restaurant'
 *       500:
 *         description: Server error
 */
router.get('/restaurant', restaurantController.getRestaurants);

/**
 * @swagger
 * /restaurant/{id}:
 *   get:
 *     summary: Get restaurant by ID
 *     tags: [Restaurants]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: Restaurant ID
 *     responses:
 *       200:
 *         description: Restaurant retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Data retrieved successfully
 *                 data:
 *                   $ref: '#/components/schemas/Restaurant'
 *       404:
 *         description: Restaurant not found
 *       500:
 *         description: Server error
 */

router.get('/restaurant/:id', restaurantController.getRestaurantById);

/**
 * @swagger
 * components:
 *   schemas:
 *     Restaurant:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: Sate Bandung Asli
 *         category:
 *           type: string
 *           example: Indonesian
 *         area:
 *           type: string
 *           example: Bandung
 *         price_range:
 *           type: number
 *           example: 35000
 *         rating:
 *           type: number
 *           example: 4.5
 */


module.exports = router;