# Blog Post Management System - Frontend

This is the frontend part of the Blog Post Management System project. It is built using React and interacts with the backend API to manage blog posts.

## Features

- Create new blog posts
- View a list of all blog posts
- Edit existing blog posts
- Delete blog posts
- View details of a single blog post

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the frontend directory:
   ```
   cd blog-post-management-system/frontend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

To start the development server, run:
```
npm start
```

The application will be available at `http://localhost:3000`.

### Folder Structure

- `src/components`: Contains React components for creating, editing, and displaying blog posts.
- `src/api`: Contains API functions for interacting with the backend.
- `src/App.js`: Main application component that sets up routing.
- `src/index.js`: Entry point of the React application.

### API Endpoints

The frontend interacts with the following backend API endpoints:

- `POST /posts`: Create a new blog post
- `GET /posts`: Retrieve all blog posts
- `GET /posts/:id`: Retrieve a single blog post by ID
- `PUT /posts/:id`: Update an existing blog post
- `DELETE /posts/:id`: Delete a blog post

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

### License

This project is licensed under the MIT License.