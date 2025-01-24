# Blog Post Management System - Backend

## Overview
This is the backend part of the Blog Post Management System project. It is built using Node.js, Express.js, and MongoDB. The backend provides RESTful APIs for managing blog posts, allowing users to create, view, edit, and delete posts.

## Features
- Create new blog posts with a title and content.
- Retrieve a list of all blog posts.
- Retrieve a single blog post by ID.
- Update existing blog posts.
- Delete blog posts.

## Technologies Used
- **Node.js**: JavaScript runtime for building the server.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing blog posts.
- **Mongoose**: ODM for MongoDB to interact with the database.
- **CORS**: Middleware for enabling Cross-Origin Resource Sharing.
- **dotenv**: Module for loading environment variables from a `.env` file.

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   cd blog-post-management-system/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the backend directory and add your MongoDB connection string:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   ```

4. Start the server:
   ```
   npm start
   ```

## API Endpoints
- **POST** `/posts`: Create a new blog post.
- **GET** `/posts`: Retrieve all blog posts.
- **GET** `/posts/:id`: Retrieve a single blog post by ID.
- **PUT** `/posts/:id`: Update an existing blog post.
- **DELETE** `/posts/:id`: Delete a blog post.

## Directory Structure
```
backend/
├── controllers/       # Contains request handlers for blog posts
├── models/            # Contains Mongoose models
├── routes/            # Contains route definitions
├── .env               # Environment variables
├── server.js          # Entry point of the application
└── package.json       # NPM configuration file
```

## License
This project is licensed under the MIT License.