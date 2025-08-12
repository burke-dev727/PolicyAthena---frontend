/*
 * File: api.jsx
 * Author: Xinrui Hou
 * Date: 2025-08-06
 * Description: Centralized API service for making backend API calls with common HTTP methods and error handling.
 */

const API_BASE_URL = 'http://localhost:8000';

// Common headers for API requests
const getHeaders = () => ({
  'Content-Type': 'application/json',
});

// Generic HTTP methods
const api = {
  // GET request
  async get(endpoint) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'GET',
        headers: getHeaders(),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('GET request failed:', error);
      throw error;
    }
  },

  // POST request
  async post(endpoint, data) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('POST request failed:', error);
      throw error;
    }
  },

  // PUT request
  async put(endpoint, data) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('PUT request failed:', error);
      throw error;
    }
  },

  // DELETE request
  async delete(endpoint) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'DELETE',
        headers: getHeaders(),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('DELETE request failed:', error);
      throw error;
    }
  },
};

export default api; 