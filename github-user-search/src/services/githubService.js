import { fetchUserData } from './githubService';
import axios from 'axios';

// Mock the Axios library
jest.mock('axios');

// Test case for successful API response
test('fetches user data successfully', async () => {
  const data = { data: { login: 'testuser', avatar_url: 'https://avatar.com', html_url: 'https://github.com/testuser' } };
  axios.get.mockResolvedValue(data);  // Mocking successful API response

  const result = await fetchUserData('testuser');  // Call the fetchUserData function
  expect(result.login).toEqual('testuser');  // Check if result contains the expected login
});

// Test case for failed API response
test('throws an error if user not found', async () => {
  axios.get.mockRejectedValue(new Error('User not found'));  // Mocking failed API response

  await expect(fetchUserData('unknown')).rejects.toThrow('User not found');  // Check if error is thrown
});
