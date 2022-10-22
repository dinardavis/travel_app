import React from "react";

const PHOTOS_API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY



export default function Photos(props) {

  const [photos, setPhotos] = React.useState([])
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
    
  React.useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos/?query=${props.searchParam}&client_id=${PHOTOS_API_KEY}&orientation=portrait&per_page=10`)
      .then(res => res.json())
      .then(data => setPhotos(data.results))
  }, [props.searchParam])

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === photos.length - 1 ? 0 : prevIndex + 1
        ),
      4000
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  const slideShow = photos.map((photo, index) => {
    return (  
      <div className="slide" key={photo.id} to="route" target="_blank" rel="noopener noreferrer" alt={photo.alt_description}>
        <a href={photo.urls.regular} key={photo.id} className="img-link" to="route" target="_blank" rel="noopener noreferrer">
          <img  src={photo.urls.regular} alt={photo.alt_description} id={`img-${index}`}  className="grid-img" />
        </a>  
      </div>
    )
  })

  const slideshowMarkers = photos.map((_, idx) => {
    return (
      <div 
        key={idx} 
        className={`slideshowMarker ${index === idx ? " active" : ""}`}
        onClick={() => {
          setIndex(idx)
        }}
      ></div>
    )
  })

  const styles = {
    transform: `translate3d(${-index * 100}%, 0, 0)`
  }

  return (
      <div className="photo-container slideshow light-mode">
        <div className="slideshowSlider" style={styles}>
          {slideShow}
        </div>
        <div className="slideshowMarkers-container">
            {slideshowMarkers} 
        </div>                     
      </div>
  )
}