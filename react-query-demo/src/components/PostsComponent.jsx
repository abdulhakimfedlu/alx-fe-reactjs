import { useQuery } from 'react-query';
import { useState } from 'react';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function PostsComponent() {
  const [isCachedData, setIsCachedData] = useState(false);
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery('posts', fetchPosts, {
    onSuccess: () => setIsCachedData(false), // Reset cache flag on success
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      {isFetching ? (
        <div>Loading new data...</div>
      ) : isCachedData ? (
        <div>Data loaded from cache</div>
      ) : (
        <div>Data fetched from API</div>
      )}
      <button
        onClick={() => {
          setIsCachedData(true);
          refetch();
        }}
      >
        Refetch Posts
      </button>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
