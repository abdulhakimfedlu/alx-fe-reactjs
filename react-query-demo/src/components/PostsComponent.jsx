import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

function PostsComponent() {
  const [showPosts, setShowPosts] = useState(true);
  const { data, error, isLoading, refetch } = useQuery('posts', fetchPosts, {
    staleTime: 5000, // Data stays fresh for 5 seconds
    cacheTime: 10000, // Data is cached for 10 seconds
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <button onClick={() => setShowPosts(!showPosts)}>
        {showPosts ? 'Hide' : 'Show'} Posts
      </button>
      {showPosts && (
        <>
          <ul>
            {data.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
          <button onClick={refetch}>Refetch Posts</button>
        </>
      )}
    </div>
  );
}

export default PostsComponent;
