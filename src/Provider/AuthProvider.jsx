import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase.config";
import { useLocation } from "react-router-dom";

export const AuthContext = createContext("");
const provider = new GoogleAuthProvider();

//===========>>Component<<==============//
const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState("");
  const [loading, setLoading] = useState(true); //this is for load user data
  const [loader, setIsLoader] = useState(false); // this is for show loading spinner

  //sign up with email pass
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Update Profile
  const updateUser = (info) => {
    return updateProfile(auth.currentUser, info);
  };

  //login with email pass
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Log in withGoogle
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //Check user logged in or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      setUserInfo(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  //Sign Out user
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //Toggle Theme
  const [isDark, setDark] = useState(false);

  
  // data set as object to send on context api,
  const authData = {
    createUser,
    updateUser,
    loginUser,
    userInfo,
    setUserInfo,
    signOutUser,
    loading,
    setLoading,
    loginWithGoogle,
    loader,
    setIsLoader,
    isDark,
    setDark,
  };
  // console.log(userInfo);
  return (
    <div className="">
      <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
