// filepath: /c:/Users/Rayane/OneDrive/Bureau/EXAM-NOSQL(1)/blog-post-management-system/frontend/src/components/EditPost.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostById, updatePost } from '../api/api';
import styles from './EditPost.module.css';

function EditPost() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPostById(id);
      setTitle(post.title);
      setContent(post.content);
    };
    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePost(id, { title, content });
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
      <button type="submit" className={styles.button}>Update Post</button>
    </form>
  );
}

export default EditPost;