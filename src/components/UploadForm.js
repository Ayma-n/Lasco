import React, { useRef, useState } from "react";
import { useDb } from "../contexts/DatabaseContext";
import { useNavigate } from "react-router-dom";
import { Fab, Button } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";

export default function UploadForm() {
  const { uploadArtImage, updateArtData, userInfo } = useDb();
  const navigate = useNavigate();

  const refs = {
    title: useRef(),
    description: useRef(),
    price: useRef(),
    image: useRef(),
  };

  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    console.log(refs.title.current.value);

    if (isNaN(refs.price.current.value)) {
      return setError("Price must be a number.");
    }

    const newArtURL = await uploadArtImage(refs.image.current.files[0]);

    const newArt = {
      author: userInfo.username,
      description: refs.description.current.value,
      likes: [],
      price: refs.price.current.value,
      title: refs.title.current.value,
      url: newArtURL,
    };

    await updateArtData(newArt);
    setLoading(false);

    navigate("/profile");
  }

  return (
    <div id="UploadForm">
      <div id="form-title">Upload artwork</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="artwork-title">Title: </label>
        <input
          ref={refs.title}
          type="text"
          id="artwork-title"
          name="artwork-title"
        ></input>
        <label htmlFor="artwork-desc">Description: </label>
        <input
          ref={refs.description}
          type="text"
          id="artwork-desc"
          name="artwork-desc"
        ></input>
        <label htmlFor="artwork-price">Price: </label>
        <input
          ref={refs.price}
          type="text"
          id="artwork-price"
          name="artwork-price"
        ></input>
        <label htmlFor="upload-image">Image: 
        <input
          style={{ display: "none" }}
          id="upload-image"
          name="upload-image"
          type="file"
          accept="image/*"
          ref={refs.image}
        />
        <Fab color="primary" size="small" component="span" aria-label="add">
          <AddIcon />
        </Fab>
        </label>
        <button type="submit" disabled={loading}></button>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
}
