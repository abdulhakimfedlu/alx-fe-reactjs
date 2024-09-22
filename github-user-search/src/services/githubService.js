import axios from 'axios';

export const fetchUserData = async (username) => {
  const url = `https://api.github.com/users/${username}`;
  try {
    const response = await axios.get(url);  // API request
    return response.data;  // Return the user data
  } catch (error) {
    throw new Error('User not found');  // Handle errors
  }
};
