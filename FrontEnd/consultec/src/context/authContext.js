import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { setDoc } from "firebase/firestore";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error('There is no auth provider');
  return context;
};

export function AuthProvider({ children }) {
  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);


  return (
    <authContext.Provider value={{ signup }}>{children}</authContext.Provider>
  );
}