// filepath: /c:/Users/Rayane/OneDrive/Bureau/EXAM-NOSQL(1)/blog-post-management-system/frontend/src/components/CreatePost.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../api/api';
import styles from './CreatePost.module.css';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost({ title, content });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className={styles.input}
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        className={styles.textarea}
      />
      <button type="submit" className={styles.button}>Create Post</button>
    </form>
  );
}

export default CreatePost;