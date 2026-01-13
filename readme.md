# Bandung Restaurant API

A RESTful API built with Node.js, Express.js, Sequelize, and PostgreSQL for managing and listing restaurants in Bandung.

---

## ✨ Features

- 📋 Get all restaurants with advanced filtering
- 🔍 Get restaurant by ID
- 📄 Pagination support
- 🔢 Sorting (ascending/descending)
- 🔎 Keyword search
- 🏷️ Filter by category
- 📍 Filter by area
- 💰 Filter by price range
- ⭐ Filter by rating
- 🗑️ Soft delete support

---

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **ORM:** Sequelize
- **Database:** PostgreSQL
- **Language:** JavaScript

---

## 📡 API Endpoints

### 1. Get All Restaurants

```http
GET /restaurant
```

#### Query Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `page` | integer | 1 | Page number |
| `limit` | integer | 10 | Items per page (max: 100) |
| `search` | string | - | Search in name and category |
| `category` | string | - | Filter by category |
| `area` | string | - | Filter by area |
| `minPrice` | number | - | Minimum price |
| `maxPrice` | number | - | Maximum price |
| `rating` | number | - | Minimum rating |
| `sortBy` | string | name | Sort field (name, price_range, rating, createdAt, updatedAt) |
| `order` | string | ASC | Sort order (ASC or DESC) |

#### Example Requests

```bash
# Basic request
GET /restaurant

# With pagination
GET /restaurant?page=2&limit=5

# Search by keyword
GET /restaurant?search=sate

# Filter by category and area
GET /restaurant?category=Indonesian&area=Lengkong

# Sort by rating (descending)
GET /restaurant?sortBy=rating&order=DESC

# Complex query
GET /restaurant?search=pizza&category=Italian&sortBy=rating&order=DESC&page=1&limit=10
```

#### Success Response (200 OK)

```json
{
    "success": true,
    "message": "Data retrieved successfully",
    "data": {
        "page": 15,
        "limit": 2,
        "totalData": 30,
        "totalPages": 15,
        "hasNextPage": false,
        "hasPrevPage": true,
        "sortBy": "rating",
        "order": "desc",
        "content": [
            {
                "id": "0cff8baf-9938-459a-b477-eaf029d4ee6b",
                "name": "Dapur Dahapati",
                "category": "Sundanese",
                "area": "Setiabudi",
                "address": "Jl. Setiabudi No.137, Kota Bandung",
                "price_range": "Rp 30.000 - Rp 70.000",
                "open_time": "10:00:00",
                "close_time": "21:00:00",
                "is_smoking_allowed": false,
                "is_halal": true,
                "rating": 4.3,
                "createdAt": "2026-01-13T03:32:02.913Z",
                "updatedAt": "2026-01-13T03:32:02.913Z",
                "deletedAt": null
            },
            {
                "id": "03bf89e2-8117-4ce6-be25-2b3e31926d53",
                "name": "RM Ampera",
                "category": "Sundanese",
                "area": "Pasteur",
                "address": "Jl. Dr. Djunjunan No.135, Kota Bandung",
                "price_range": "Rp 20.000 - Rp 50.000",
                "open_time": "07:00:00",
                "close_time": "22:00:00",
                "is_smoking_allowed": false,
                "is_halal": true,
                "rating": 4.2,
                "createdAt": "2026-01-13T03:32:02.913Z",
                "updatedAt": "2026-01-13T03:32:02.913Z",
                "deletedAt": null
            }
        ]
    }
}
```

---

### 2. Get Restaurant by ID

```http
GET /restaurant/detail/:id
```

#### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string (UUID) | Yes | Restaurant ID |

#### Example Request

```bash
GET /restaurant/550e8400-e29b-41d4-a716-446655440000
```

#### Success Response (200 OK)

```json
{
    "success": true,
    "message": "Data retrieved successfully",
    "data": {
        "id": "0cff8baf-9938-459a-b477-eaf029d4ee6b",
        "name": "Dapur Dahapati",
        "category": "Sundanese",
        "area": "Setiabudi",
        "address": "Jl. Setiabudi No.137, Kota Bandung",
        "price_range": "Rp 30.000 - Rp 70.000",
        "open_time": "10:00:00",
        "close_time": "21:00:00",
        "is_smoking_allowed": false,
        "is_halal": true,
        "rating": 4.3,
        "createdAt": "2026-01-13T03:32:02.913Z",
        "updatedAt": "2026-01-13T03:32:02.913Z",
        "deletedAt": null
    }
}
```

#### Error Response (404 Not Found)

```json
{
  "success": false,
  "message": "Restaurant not found",
  "data": null
}
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 14.x
- PostgreSQL >= 12.x
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/bandung-restaurant-api.git
cd bandung-restaurant-api
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**

Create a `.env` file in the root directory:

```env
# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=bandung_restaurant
DB_USER=postgres
DB_PASSWORD=your_password

# Server
PORT=3000
NODE_ENV=development
```

4. **Create database**

```bash
npx sequelize-cli db:create
```

5. **Run migrations**

```bash
npx sequelize-cli db:migrate
```

6. **Seed database (optional)**

```bash
npx sequelize-cli db:seed:all
```

7. **Start the server**

```bash
# Development
nodemon index
```

The server will run on `http://localhost:3000`

---

## 📁 Project Structure

```
bandung-restaurant-api/
├── config/
│   └── database.js          # Database configuration
├── controllers/
│   └── restaurantController.js
├── models/
│   ├── index.js
│   └── restaurant.js
├── routes/
│   └── restaurantRoute.js
├── migrations/
│   └── XXXXXX-create-restaurant.js
├── seeders/
│   └── XXXXXX-demo-restaurant.js
├── utils/
│   └── pagination.js        # Pagination helper
├── .env                     # Environment variables
├── .gitignore
├── app.js                   # Express app
├── package.json
└── README.md
```

---

## 🗃️ Database Schema

### Restaurant Table

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PRIMARY KEY | Unique identifier |
| name | VARCHAR(255) | NOT NULL | Restaurant name |
| category | VARCHAR(255) | - | Food category |
| area | VARCHAR(255) | - | Location area |
| address | VARCHAR(255) | NOT NULL | Full address |
| price_range | VARCHAR(255) | - | Price range (e.g., "20k-50k") |
| open_time | TIME | - | Opening time |
| close_time | TIME | - | Closing time |
| is_smoking_allowed | BOOLEAN | DEFAULT false | Smoking allowed |
| is_halal | BOOLEAN | DEFAULT false | Halal certified |
| rating | FLOAT | - | Rating (0-5) |
| createdAt | TIMESTAMP | NOT NULL | Created timestamp |
| updatedAt | TIMESTAMP | NOT NULL | Updated timestamp |
| deletedAt | TIMESTAMP | - | Soft delete timestamp |

---

## 🧪 Testing

Test the API using tools like:
- **Postman**
- **Thunder Client** (VS Code extension)
- **curl**

Example using curl:

```bash
# Get all restaurants
curl http://localhost:3000/restaurant

# Get restaurant by ID
curl http://localhost:3000/restaurant/YOUR-UUID-HERE

# Search with filters
curl "http://localhost:3000/restaurant?search=sate&category=Indonesian&page=1&limit=10"
```

---

## 👥 Author

**Your Name**
- GitHub: https://github.com/irniadryani

---

## 🙏 Acknowledgments

- Inspired by the vibrant culinary scene in Bandung
- Built with ❤️ using Node.js and Express

---

## 📮 Support

If you have any questions or issues, please open an issue on GitHub or contact me directly.