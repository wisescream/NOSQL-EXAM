// filepath: /c:/Users/Rayane/OneDrive/Bureau/EXAM-NOSQL(1)/blog-post-management-system/frontend/src/components/PostList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts, searchPosts } from '../api/api';
import styles from './PostList.module.css';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getAllPosts();
      setPosts(fetchedPosts);
    };
    fetchPosts();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    const searchedPosts = await searchPosts(query);
    setPosts(searchedPosts);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog Posts</h1>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title"
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>Search</button>
      </form>
      <ul className={styles.postList}>
        {posts.map((post) => (
          <li key={post._id} className={styles.postItem}>
            <Link to={`/post/${post._id}`} className={styles.postLink}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/create" className={styles.createLink}>Create New Post</Link>
    </div>
  );
}

export default PostList;