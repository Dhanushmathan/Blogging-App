import axios from "axios";

const POST_API = axios.create({
    baseURL: 'http://localhost:8080/api/posts',
    withCredentials: true,
});

const LIKE_API = axios.create({
    baseURL: 'http://localhost:8080/api/likes',
    withCredentials: true,
});

const COM_API = axios.create({
    baseURL: 'http://localhost:8080/api/comments',
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

export const getUserPosts = async (userId, token) => {
    return POST_API.get(`/user/${userId}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};

export const toggleLike = async (userId, postId, token) => {
    return LIKE_API.post(`/${userId}/${postId}`, {}, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};

export const isLiked = async (postId, userId, token) => {
    return LIKE_API.get(`/isLiked/${postId}/${userId}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};

export const addComments = async (postId, userId, comment, token) => {
    return COM_API.post(`/post/${postId}/user/${userId}`, { content: comment }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
};

export const getCommentByPostId = (postId, token) => {
    return COM_API.get(`/post/${postId}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};

export const getToken = () => {
    return localStorage.getItem("token");
}