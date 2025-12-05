import axios from "axios";

const API_URL = "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getProfile = () => api.get("/profile");
export const getEducation = () => api.get("/education");
export const getSkills = () => api.get("/skills");
export const getCourses = () => api.get("/courses");
export const getPublications = () => api.get("/publications");
export const getResearch = () => api.get("/research");
export const getCommunityService = () => api.get("/community-service");
export const getCertifications = () => api.get("/certifications");
export const getGallery = () => api.get("/gallery");

export const login = (credentials) => api.post("/auth/login", credentials);

// Generic CRUD helpers
export const createItem = (endpoint, data) => api.post(endpoint, data);
export const updateItem = (endpoint, id, data) =>
  api.put(`${endpoint}/${id}`, data);
export const deleteItem = (endpoint, id) => api.delete(`${endpoint}/${id}`);
export const updateData = (endpoint, data) => api.put(endpoint, data); // For profile

export default api;
