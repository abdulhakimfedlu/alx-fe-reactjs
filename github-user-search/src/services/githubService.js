import axios from 'axios';

export const fetchUserData = async ({ username, location, minRepos }) => {
  let query = '';

  if (username) query += `user:${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${query}`;

  try {
    const response = await axios.get(url);
    return response.data.items; // Return list of users
  } catch (error) {
    throw new Error('Search failed');
  }
};
