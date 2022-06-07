import React, { useRef, useState } from "react";
import { useDb } from "../contexts/DatabaseContext";
import { useNavigate } from "react-router-dom";
import { Fab, Button, Input, TextField, IconButton } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import InputAdornment from "@mui/material/InputAdornment";
import { PhotoCamera } from "@mui/icons-material";

export default function UploadForm() {
  const { uploadArtImage, updateArtData, userInfo } = useDb();
  const navigate = useNavigate();
  const [price, setPrice] = useState(0);

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
    console.log("hiiiii");

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
        <label htmlFor="artwork-title">
          Title:
          <input
            ref={refs.title}
            type="text"
            id="artwork-title"
            name="artwork-title"
            style={{ display: "none" }}
          ></input>
          <TextField variant="outlined" placeholder="Forever Peace" />
        </label>
        <label htmlFor="artwork-desc">
          Description:
          <input
            ref={refs.description}
            type="text"
            id="artwork-desc"
            name="artwork-desc"
            style={{ display: "none" }}
          ></input>
          <TextField
            variant="outlined"
            multiline
            placeholder="Lucious Greens and Blues in the Jungle of the Clouds"
          />
        </label>
        <label htmlFor="artwork-price">
          Price:
          <input
            ref={refs.price}
            type="text"
            id="artwork-price"
            name="artwork-price"
            style={{ display: "none" }}
          ></input>
          <TextField
            placeholder="250"
            variant="outlined"
            onChange={(e) => setPrice(e.target.value)}
            error={isNaN(price)}
            helperText="Price must be a number."
            startadornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </label>
        <label htmlFor="upload-image">
          Image:
          <input
            style={{ display: "none" }}
            id="upload-image"
            name="upload-image"
            type="file"
            accept="image/*"
            ref={refs.image}
          />
          <Fab color="primary" size="small" component="span" aria-label="add">
            <PhotoCamera />
          </Fab>
        </label>
        <Button
          id="submit-button"
          variant="contained"
          disabled={loading}
          color="primary"
          type="submit"
        >
          Post
        </Button>

        {error && <div>{error}</div>}
      </form>
    </div>
  );
}
