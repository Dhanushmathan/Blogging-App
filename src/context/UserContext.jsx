import { createContext, useContext, useEffect, useState } from 'react'

const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
  );

  const [token, setToken] = useState(localStorage.getItem("token") || null);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }
    if (token) {
      localStorage.setItem("token", token);
    }
  }, [currentUser, token]);

  const logout = () => {
    setCurrentUser(null);
    setToken(null);
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
  }

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, token, setToken, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export const useCurrentUser = () => useContext(UserContext);