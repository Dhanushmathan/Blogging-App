import axios from "axios";

const API = axios.create({
    baseURL: 'http://localhost:8080/api/users',
    withCredentials: true,
});

const CAT_API = axios.create({
    baseURL: 'http://localhost:8080/api/category',
    withCredentials: true,
});

const POST_API = axios.create({
    baseURL: 'http://localhost:8080/api/posts',
    withCredentials: true,
});

export const uploadProfileImage = async (userId, imageData, token) => {
    return API.post(`/${userId}/profile-image`, imageData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
        }
    });
}

export const updateUserProfile = async (userId, profileData, token) => {
    return API.put(`/${userId}`, profileData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const getAllCategories = async (token) => {
    return CAT_API.get('/', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
}

export const createPost = async (userId, categoryId, postData, token) => {
    return POST_API.post(`/${userId}/${categoryId}`, postData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
        }
    });
}

export const getToken = () => {
    return localStorage.getItem("token");
}