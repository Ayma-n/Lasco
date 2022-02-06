import React, { useContext, useState, useEffect } from "react";
import { db } from "../components/firebase";
import {
  collection,
  addDoc,
  getDoc,
  query,
  where,
  getDocs,
  setDoc,
  doc,
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

  async function updateDb(newItem, uid) {
    const profilesRef = collection(db, "profiles");
    // gets doc in db that corresponds to current user
    const q = query(profilesRef, where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    //console.log(queryResult);
    //console.log(querySnapshot);
    //console.log(uid);
    //console.log(querySnapshot)

    const docs = [];
    var docId = '';
    querySnapshot.forEach((doc) => {
      // docs.push(doc);
       docId = doc.id;
    });
    // console.log("docs0", docs[0])
    // updates current db by adding new key/value pair, which replaces existing key if it exists (bc of merge)
    return setDoc(doc(profilesRef, docId), newItem, {merge: true});
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

  async function getUIDfromUsername(username) {
    const profilesRef = collection(db, "/profiles");
    const q = query(profilesRef, where("username", "==", username));
    const querySnapshot = await getDocs(q);
    const docs = [];

    querySnapshot.forEach((doc) => {
      docs.push(doc.data());
    });

    if (docs[0]) {
      return docs[0].uid;
    } else {
      return "";
    }
  }

    // TODO: Verify authentication before fetching (send the server a token, or something)
  async function uploadArtDb(file) {
    const { url } = await fetch("http://localhost:8454/art").then((res) => res.json())
    console.log("URL: ", url)
    // sends image to bucket url for hosting
    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "mutlipart/form-data"
      },
      body: file
    })
    // gets actual image, that is now stored on bucket
    const imageUrl = url.split('?')[0]
    console.log("IMAGEURL", imageUrl)
    var currentArt;
    console.log(userInfo.artwork)
      // takes existing array, adds new artwork url to it
      currentArt = [...userInfo.artwork, imageUrl]
    // TODO: remove this.
    console.log(currentArt)
    return updateDb({artwork: currentArt}, currentUser.uid)
    //fetchUserData();
  }

  const [userInfo, setUserInfo] = useState({ displayName: "", username: "" });

  // TODO: this function is getting called every second
  async function fetchUserData() {
    //console.log(currentUser.uid);
    if (!currentUser || currentUser === 'loading') return;
    const userInfoObj = await getProfileData(currentUser.uid);
    console.log(userInfoObj);
    //console.log(userInfoObj);
    //console.log(currentUser.uid);
    setUserInfo(userInfoObj);
    //console.log(userInfoObj);
  }

  useEffect(fetchUserData, [currentUser]);
  //fetchUserData();

  const value = {
    createUser,
    getProfileData,
    fetchUserData,
    updateDb,
    uploadArtDb,
    getUIDfromUsername,
    userInfo,
  };

  return (
    <DatabaseContext.Provider value={value}>
      {children}
    </DatabaseContext.Provider>
  );
}
