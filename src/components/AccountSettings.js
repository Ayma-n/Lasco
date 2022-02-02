import React, { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useDb } from "../contexts/DatabaseContext";
import "../output.css";

export default function AccountSettings() {
  const {
    currentUser,
    updateUserEmail,
    updateUserPassword,
    reauthenticateUser,
    deleteAccount,
  } = useAuth();
  const { getProfileData, updateDb, userInfo } = useDb();

  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const passwordConfRef = useRef();
  const nameRef = useRef();
  const usernameRef = useRef();
  const bioRef = useRef();

  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [message, setMessage] = useState();

  const navigate = useNavigate();

  function handleSubmit(e) {
    setError("");
    setLoading(true);
    e.preventDefault();
    if (passwordRef.current.value) {
      reauthenticateUser(oldPasswordRef.current.value).catch((err) => {
        console.error(err);
        return setError("Invalid current password.");
      });
    }

    // If passwords do not match, then update the error and return (stops the method)
    if (passwordRef.current.value !== passwordConfRef.current.value) {
      setLoading(false);
      return setError("Passwords do not match!");
    }

    // Array of promises that should all be resolved later.
    const promises = [];

    // If the email given by the user in the form is different from the user's current email,
    // then update Email (adds a promise to the array of promises)
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateUserEmail(emailRef.current.value));
    }
    // If the email given by the user in the form is different from the user's current email,
    // then update Email (adds a promise to the array of promises)
    if (nameRef.current.value !== userInfo.displayName) {
      promises.push(
        updateDb({ displayName: nameRef.current.value }, currentUser.uid)
      );
    }
    // If the bio given by the user in the form is different from the user's current bio,
    // then update bio (adds a promise to the array of promises)
    if (bioRef.current.value !== userInfo.bio) {
      promises.push(updateDb({ bio: bioRef.current.value }, currentUser.uid));
    }

    // If the password's not blank, then update the user's password to that.
    if (passwordRef.current.value) {
      promises.push(updateUserPassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        setMessage("Account settings updated successfully.");
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to update account settings.");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  // deletes account when corrsp btn is pressed.
  async function submitAccountDeletion() {
    setLoading(true);
    deleteAccount()
      .then(() => {
        // This does NOT work: it goes back to settings and redirects to login because of the private route.
        return navigate("/");
      })
      .catch(() => {
        setLoading(false);
        return setError("We encountered an error in deleting your account.");
      });
    setLoading(false);
  }

  // back btn in top left, redirects to previous page
  // TODO: get profile to refresh when bio changes....
  function handleBackClick() {
    navigate(-1);
  }

  async function uploadProfileImg(e) {
    e.preventDefault();
    const file = document.getElementById("profileInput").files[0];

    // TODO: Verify authentication before fetching (send the server a token, or something)
    const { url } = fetch("http://localhost:8454/s3")
    .then((res) => res.json())

    await fetch({
      method: "PUT",
      headers: {
        "Content-Type": "mutlipart-"
      }
    })
    console.log(url);
  }

  return (
    <div id="AccountSettings">
      <button
        onClick={handleBackClick}
        className="absolute left-2 hover:underline"
      >
        Back
      </button>
      <div className="text-2xl font-bold">Account Settings</div>
      {error && <div>{error}</div>}
      {message && <div>{message}</div>}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col border-2 border-solid relative text-center al-items-c gap-3 w-screen"
      >
        <div>
          <label className="relative text-left self-start">Display Name:</label>
          <input
            defaultValue={userInfo.displayName}
            ref={nameRef}
            className="flex flex-col border-2 border-solid"
          ></input>
        </div>
        <div>
          <label className="relative text-left self-start">Bio:</label>
          <input
            defaultValue={userInfo.bio}
            ref={bioRef}
            className="flex flex-col border-2 border-solid"
          ></input>
        </div>
        <div>
          <label className="relative text-left self-start">Username: </label>
          <input
            defaultValue={userInfo.username}
            ref={usernameRef}
            className="flex flex-col border-2 border-solid"
          ></input>
        </div>
        <div>
          <label className="relative text-left self-start">Email: </label>
          <input
            type="email"
            defaultValue={currentUser.email}
            ref={emailRef}
            className="flex flex-col border-2 border-solid"
          ></input>
        </div>
        <div>
          <label className="relative text-left self-start">
            Current Password:{" "}
          </label>
          <input
            type="password"
            ref={oldPasswordRef}
            className="flex flex-col border-2 border-solid"
          ></input>
        </div>
        <div>
          <label className="relative text-left self-start">
            New Password:{" "}
          </label>
          <input
            type="password"
            ref={passwordRef}
            className="flex flex-col border-2 border-solid"
          ></input>
        </div>
        <div>
          <label className="relative text-left self-start">
            Password Confirmation:{" "}
          </label>
          <input
            type="password"
            ref={passwordConfRef}
            className="flex flex-col border-2 border-solid"
          ></input>
        </div>
        <button
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-700 text-white hover:-translate-y-1 transition-all font-bold py-4 rounded-full shadow-lg text-2xl focus:bg-purple-500 relative sm:px-6"
        >
          Update
        </button>
      </form>
      <form onSubmit={uploadProfileImg}>
        <input id="profileInput" type="file"></input>
        <button className="bg-red-800 hover:bg-red-1000 text-white hover:-translate-y-1 transition-all font-bold py-4 rounded-full shadow-lg text-2xl focus:bg-purple-500 relative sm:px-6">
          Upload
        </button>
      </form>
      <button
        className="my-10 bg-red-800 hover:bg-red-1000 text-white hover:-translate-y-1 transition-all font-bold py-4 rounded-full shadow-lg text-2xl focus:bg-purple-500 relative sm:px-6"
        onClick={submitAccountDeletion}
      >
        DELETE ACCOUNT
      </button>
    </div>
  );
}
