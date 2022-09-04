import React from "react";

const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY


export default function Photos() {
  const [photos, setPhotos] = React.useState([])
  
  React.useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos/?query=tokyo&client_id=${API_KEY}&per_page=6`)
      .then(res => res.json())
      .then(data => setPhotos(data.results))
  }, [])

  const photoImages = photos.map(photo => {
    return (
      <a href={photo.urls.regular} key={photo.id} className="img-link" to="route" target="_blank" rel="noopener noreferrer">
        <img  src={photo.urls.regular} alt={photo.alt_description} className="grid-img" />
      </a>
    )
  })

  return (
    <div className="photo-container">
      {photoImages}
    </div>
  )
}