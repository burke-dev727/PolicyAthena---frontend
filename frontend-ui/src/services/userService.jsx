/*
 * File: userService.jsx
 * Author: Xinrui Hou
 * Date: 2025-08-06
 * Description: User-specific API service functions for userInput and userProfile operations using the centralized API service.
 */

import api from './api.jsx';

// User Input API calls
export const userInputService = {
  // Submit user input data
  async submitUserInput(userData) {
    try {
      const result = await api.post('/userInput/userInput', userData);
      
      if (result.profile_id) {
        console.log('Profile saved with ID:', result.profile_id);
        return { success: true, profile_id: result.profile_id };
      } else {
        console.error('Error:', result.error);
        return { success: false, error: result.error };
      }
    } catch (error) {
      console.error('Network error:', error);
      return { success: false, error: error.message };
    }
  },

  // Get user input data by profile ID
  async getUserInput(profileId) {
    try {
      const result = await api.get(`/userInput/userInput/${profileId}`);
      return { success: true, data: result };
    } catch (error) {
      console.error('Failed to get user input:', error);
      return { success: false, error: error.message };
    }
  },
};

// User Profile API calls
export const userProfileService = {
  // Submit user profile data
  async submitUserProfile(profileData) {
    try {
      const result = await api.post('/userInput/profile', profileData);
      
      if (result.profile_id) {
        console.log('Profile saved with ID:', result.profile_id);
        return { success: true, profile_id: result.profile_id };
      } else {
        console.error('Error:', result.error);
        return { success: false, error: result.error };
      }
    } catch (error) {
      console.error('Network error:', error);
      return { success: false, error: error.message };
    }
  },

  // Get user profile by ID
  async getUserProfile(profileId) {
    try {
      const result = await api.get(`/userInput/profile/${profileId}`);
      return { success: true, data: result };
    } catch (error) {
      console.error('Failed to get user profile:', error);
      return { success: false, error: error.message };
    }
  },

  // Update user profile
  async updateUserProfile(profileId, profileData) {
    try {
      const result = await api.put(`/userInput/profile/${profileId}`, profileData);
      return { success: true, data: result };
    } catch (error) {
      console.error('Failed to update user profile:', error);
      return { success: false, error: error.message };
    }
  },
};

// Export both services
export default {
  userInput: userInputService,
  userProfile: userProfileService,
}; 