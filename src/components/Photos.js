import React from "react";

const PHOTOS_API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY



export default function Photos(props) {

  const [photos, setPhotos] = React.useState([])
    

  React.useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos/?query=${props.searchParam}&client_id=${PHOTOS_API_KEY}&per_page=6`)
      .then(res => res.json())
      .then(data => setPhotos(data.results))
  }, [props.searchParam])



  const photoImages = photos.map((photo, index) => {
      return (      
          <a href={photo.urls.regular} key={photo.id} className="img-link" to="route" target="_blank" rel="noopener noreferrer">
            <img  src={photo.urls.regular} alt={photo.alt_description} id={`img-${index}`}  className="grid-img" />
          </a>    
      )
  })


  console.log(photoImages.length)

  return (
    <div className="photo-container"> 
        {photoImages.length < 6 ? <p className="no-pictures">Looks like we didn't find any pictures. <br></br>All the more reason for you to book that flight and take some!</p> :
        photoImages}    
    </div>  

  )
}