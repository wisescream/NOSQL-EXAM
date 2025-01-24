import axios from 'axios';

const API_URL = 'http://localhost:5000/posts';

// Create a new blog post
export const createPost = async (postData) => {
    const response = await axios.post(API_URL, postData);
    return response.data;
};

// Get all blog posts
export const getAllPosts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Get a single blog post by ID
export const getPostById = async (postId) => {
    const response = await axios.get(`${API_URL}/${postId}`);
    return response.data;
};

// Update a blog post
export const updatePost = async (postId, postData) => {
    const response = await axios.put(`${API_URL}/${postId}`, postData);
    return response.data;
};

// Delete a blog post
export const deletePost = async (postId) => {
    const response = await axios.delete(`${API_URL}/${postId}`);
    return response.data;
};

// Search blog posts by title
export const searchPosts = async (query) => {
    const response = await axios.get(`${API_URL}/search/${query}`);
    return response.data;
};