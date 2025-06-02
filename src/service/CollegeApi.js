// src/services/collegeApi.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/admin'; // Update with your backend URL

export const addCollege = async (collegeData, imageFile) => {
  const formData = new FormData();
  
  // Convert the college data to JSON string
  formData.append('college', JSON.stringify(collegeData));
  
  // Append the image file if it exists
  if (imageFile) {
    formData.append('image', imageFile);
  }

  try {
    const response = await axios.post(`${API_BASE_URL}/colleges`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error adding college:', error);
    throw error;
  }
};

export const markAsFeatured = async (collegeId, section) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/colleges/${collegeId}/featured`, null, {
      params: { section }
    });
    return response.data;
  } catch (error) {
    console.error('Error marking as featured:', error);
    throw error;
  }
};

export const markAsBanner = async (collegeId) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/colleges/${collegeId}/banner`);
    return response.data;
  } catch (error) {
    console.error('Error marking as banner:', error);
    throw error;
  }
};