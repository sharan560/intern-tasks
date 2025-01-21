import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchPosts = () => {
  const [posts, setPosts] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos")
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
  }, []);  

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h1>{post.id}</h1>
              <img src={post.thumbnailUrl} alt={post.title} />
              <p>{post.title}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchPosts;
