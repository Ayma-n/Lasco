import React, { useContext, useState, useEffect } from "react";
import { db } from "../components/firebase";
import {
  collection,
  addDoc,
  getDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { useAuth } from "./AuthContext";

const DatabaseContext = React.createContext();

export function useDb() {
  return useContext(DatabaseContext);
}

export function DbProvider({ children }) {
  const { currentUser } = useAuth();

  function createUser(userObject) {
    const profilesRef = collection(db, "/profiles");
    return addDoc(profilesRef, userObject);
  }

  async function getProfileData(uid) {
    const profilesRef = collection(db, "/profiles");
    const q = query(profilesRef, where("uid", "==", uid));

    const querySnapshot = await getDocs(q);
    //console.log(queryResult);
    //console.log(querySnapshot);
    //console.log(uid);
    //console.log(querySnapshot)

    const docs = [];

    querySnapshot.forEach((doc) => {
      docs.push(doc.data());
    });

    return docs[0];
  }

  const [userInfo, setUserInfo] = useState({ displayName: "", username: "" });

  async function fetchUserData() {
    //console.log(currentUser.uid);
    if (!currentUser.uid) return;
    const userInfoObj = await getProfileData(currentUser.uid);
    //console.log(userInfoObj);
    //console.log(userInfoObj);
    //console.log(currentUser.uid);
    setUserInfo(userInfoObj);
    //console.log(userInfoObj);
  }

  //   useEffect(fetchUserData, []);
  fetchUserData();

  const value = {
    createUser,
    getProfileData,
    userInfo,
  };

  return (
    <DatabaseContext.Provider value={value}>
      {children}
    </DatabaseContext.Provider>
  );
}
