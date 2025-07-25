

import axios from "axios";
const baseURL=import.meta.env.VITE_BACKEND_URL || "http://localhost:3000/";
const axiosInstance = axios.create({
  baseURL: baseURL, 
  timeout: 100000, 
});

axiosInstance.interceptors.response.use(
  (response) => response, // Pass successful responses through
  (error) => {
    // Network Error
    if (!error.response) {
      console.error("Network/Server error:", error.message);
      return Promise.reject({ message: "Network error. Please try again later." });
    }

    const { status, data } = error.response;

    // Customize error messages based on status code
   let message = "Something went wrong. Please try again.";

    if (status === 400) {
      message = data?.message || "Bad Request.";
    } else if (status === 401) {
      message = "Unauthorized. Please log in again.";
    } else if (status === 403) {
      message = "Access denied.";
    } else if (status === 404) {
      message = "Resource not found.";
    } else if (status === 409) {
      message = data?.message || "Conflict. Custom short URL may already exist.";
    } else if (status === 500) {
      message = "Internal Server Error.";
    }

    // Attach the processed message to the error object
    error.message = message;
    // Log and propagate the error
    console.error(`HTTP ${status}:`, message);
    return Promise.reject({ message, status });
  }
);

export default axiosInstance;
