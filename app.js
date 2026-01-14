require('dotenv').config();
const express = require('express');
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");
const app = express();
const db = require('./config/database');
const restaurantRoutes = require('./routes/restaurantRoute');

db.authenticate()
 .then(() => console.log('Database connected'))
 .catch((err) => console.error('Error connecting to database:', err));

app.use(express.json());

app.use('/', restaurantRoutes);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
});