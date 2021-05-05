import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usersList } from "../api/userData";

const authContext = createContext();

export function AuthProvider({ children }) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const users = usersList;
  const navigate = useNavigate();

  const loginUserWithCredentials = (email, password) => {
    const user = users.find(item => item.email === email)
    console.log({email, password})
    if (user?.password === password){
      setIsUserLoggedIn(true);
    }
    
  }

  console.log("render");

  return (
    <authContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn, loginUserWithCredentials }}>
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}
