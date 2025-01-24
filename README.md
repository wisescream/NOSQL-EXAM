# Blog Post Management System

## Overview
This project is a basic blog post management system that allows users to create, view, edit, and delete blog posts. It is built using a full-stack approach with React for the frontend, Node.js for the backend, and MongoDB for the database.

## Features
- **Create Blog Posts**: Users can create new blog posts with a title and content.
- **View Blog Posts**: Users can view a list of all blog posts.
- **Edit Blog Posts**: Users can edit existing blog posts.
- **Delete Blog Posts**: Users can delete blog posts.

## Technologies Used
- **Frontend**: React, Axios
- **Backend**: Node.js, Express.js, Mongoose
- **Database**: MongoDB

## Project Structure
```
blog-post-management-system
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── .env
│   ├── server.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── App.js
│   │   ├── index.js
│   │   └── api
│   ├── public
│   ├── package.json
│   └── README.md
└── README.md
```

## Setup Instructions

### Backend
1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file and add your MongoDB connection string.
4. Start the server:
   ```
   node server.js
   ```

### Frontend
1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm start
   ```

## API Endpoints
- **POST** `/posts`: Create a new blog post.
- **GET** `/posts`: Retrieve all blog posts.
- **GET** `/posts/:id`: Retrieve a single blog post by ID.
- **PUT** `/posts/:id`: Update a blog post by ID.
- **DELETE** `/posts/:id`: Delete a blog post by ID.

## Direct MongoDB Operations

Here are equivalent commands you can run in the Mongo shell for the same CRUD operations:
```javascript
use blog-post-management

// Create a new post
db.posts.insertOne({ title: "Example Title", content: "Example Content", createdAt: new Date() })

// Get all posts
db.posts.find()

// Search by title (case-insensitive)
db.posts.find({ title: /searchTerm/i })

// Get a single post by ID
db.posts.findOne({ _id: ObjectId("YOUR_ID_HERE") })

// Update a post
db.posts.updateOne(
  { _id: ObjectId("YOUR_ID_HERE") },
  { $set: { title: "New Title", content: "New Content" } }
)

// Delete a post
db.posts.deleteOne({ _id: ObjectId("YOUR_ID_HERE") })
```

## Additional Features (Optional)
- Search functionality for blog posts.
- Pagination for the list of blog posts.
- Sorting options for blog posts.

## Evaluation Criteria
- Functionality
- Code Quality
- Efficiency
- MongoDB Queries
- Bonus Features
