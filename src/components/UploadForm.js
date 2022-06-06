import React, { useRef, useState } from 'react'
import { useAuth } from "../contexts/AuthContext"
import { useDb } from "../contexts/DatabaseContext"

export default function UploadForm() {

  const { currentUser } = useAuth();
  const { uploadArtImage, updateArtData } = useDb();

  const refs = {
    title: useRef(),
    description: useRef(),
    price: useRef(),
    image: useRef()
  }

  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    console.log(refs.title.current.value);

    if (isNaN(refs.price.current.value)) {
      return setError("Price must be a number.")
    }

    const newArtURL = await uploadArtImage(refs.image.current.files[0]);
    

    const newArt = {
      author: currentUser.displayName,
      description: refs.description.current.value,
      likes: 0,
      price: refs.price.current.value,
      title: refs.title.current.value,
      url: newArtURL
    }

    await updateArtData(newArt);
    setLoading(false)
  }

  return (
    <div id="UploadForm">
        <div id="form-title">Upload artwork</div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="artwork-title">Title: </label>
            <input ref={refs.title} type="text" id="artwork-title" name="artwork-title"></input>
            <label htmlFor="artwork-desc">Description: </label>
            <input ref={refs.description} type="text" id="artwork-desc" name="artwork-desc"></input>
            <label htmlFor="artwork-price">Price: </label>
            <input ref={refs.price} type="text" id="artwork-price" name="artwork-price"></input>
            <label htmlFor="artwork-image">Image: </label>
            <input ref={refs.image} id="artwork-image" type="file" accept="image/*"></input>
            <button type="submit" disabled={loading}></button>
            {error && <div>{error}</div>}
        </form>
    </div>
  )
}
