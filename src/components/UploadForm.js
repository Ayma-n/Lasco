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

  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });

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
      description: inputs.description,
      likes: [],
      price: inputs.price,
      title: inputs.title,
      url: newArtURL,
    };

    console.log("new art", newArt);

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
          {/* TODO: factor input out to component */}
          <input
            ref={refs.title}
            type="text"
            id="artwork-title"
            name="artwork-title"
            style={{ display: "none" }}
            value={inputs.title}
            onChange={(e) => {
              console.log(inputs.title)
              setInputs({ ...inputs, title: e.target.value })
              }}
          ></input>
          <TextField variant="outlined" value={inputs.title}  onChange={(e) => {
              console.log(inputs.title)
              setInputs({ ...inputs, title: e.target.value })
              }}  placeholder="Forever Peace" />
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
            value={inputs.description}  onChange={(e) => {
              console.log(inputs.description)
              setInputs({ ...inputs, description: e.target.value })
              }}
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
            value={inputs.price}
            onChange={(e) => setInputs({...inputs, price: e.target.value})}
            error={isNaN(inputs.price)}
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
