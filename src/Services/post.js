import axios from "axios";

const POST_API = axios.create({
    baseURL: 'http://localhost:8080/api/posts',
    withCredentials: true,
});

export const createPost = async (userId, categoryId, postData, token) => {
    return POST_API.post(`/${userId}/${categoryId}`, postData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
        }
    });
}

export const getAllPosts = async (token) => {
    return POST_API.get('/', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}

export const getToken = () => {
    return localStorage.getItem("token");
}