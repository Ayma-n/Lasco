import React, { useEffect, useRef, useState } from "react";
import { useDb } from "../contexts/DatabaseContext";
import { useNavigate } from "react-router-dom";
import { Fab, Button, Input, TextField, IconButton } from "@material-ui/core";
import InputAdornment from "@mui/material/InputAdornment";
import { PhotoCamera } from "@mui/icons-material";

export default function UploadForm() {
  const { uploadArtImage, updateArtData, userInfo } = useDb();
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    price: "",
    image: null
  });

  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    
    if (!isFormValid()) {
      setLoading(false);
      return;
    }

    const newArtURL = await uploadArtImage(inputs.image);
    
    const newArt = {
      author: userInfo.username,
      description: inputs.description,
      likes: [],
      price: inputs.price,
      title: inputs.title,
      url: newArtURL,
    };

    await updateArtData(newArt);
    setLoading(false);

    navigate("/profile");
  }

  function isFormValid() {
    for (var k in Object.keys(inputs)) {
      if (!inputs[Object.keys(inputs)[k]]) {
         setError("Some fields are empty.");
         return false;
       }
    }
    if (isNaN(inputs.price)) {
      setError("Price must be a number");
      return false;
    }
    return true;
  }

  return (
    <div id="UploadForm">
      <div id="form-title">Upload artwork</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="artwork-title">
          Title:
          <TextField 
          variant="outlined"
          value={inputs.title}
          id="artwork-title" 
          onChange={(e) => setInputs({ ...inputs, title: e.target.value })}  
          placeholder="Forever Peace" />
        </label>
        <label htmlFor="artwork-desc">
          Description:
          <TextField
            variant="outlined"
            id="artwork-desc"
            multiline
            placeholder="Lucious Greens and Blues in the Jungle of the Clouds"
            value={inputs.description}  
            onChange={(e) => setInputs({ ...inputs, description: e.target.value })}
          />
        </label>
        <label htmlFor="artwork-price">
          Price:
          <TextField
            placeholder="250"
            variant="outlined"
            id="artwork-price"
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
            onChange={(e) => setInputs({ ...inputs, image: e.target.files[0]})}
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
