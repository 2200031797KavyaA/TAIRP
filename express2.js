import React, { useEffect, useState } from 'react';
function NewsFeed({ userId }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
  }, [userId]);
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.text}</p>
          <button onClick={() => likePost(post.id)}>Like</button>
          <button onClick={() => commentOnPost(post.id)}>Comment</button>
        </div>
      ))}
    </div>
  );
}
export default NewsFeed;
