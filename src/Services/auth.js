import axios from "axios";

const API = axios.create({
    baseURL: 'http://localhost:8080/api/auth',
});

export const registerUser = async (userData) => {
    return API.post("/register", userData);
};

export const loginUser = async (loginData) => {
    return API.post("/login", loginData);
}

export const getToken = () => {
    return localStorage.getItem("token");
}
