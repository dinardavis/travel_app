import React from "react";


export default function Photos() {
  const [photos, setPhotos] = React.useState([])
  
  React.useEffect(() => {
    fetch("https://api.unsplash.com/search/photos/?query=tokyo&client_id=irSM3XZycpgVKpl8v_cZPXQzf0IJ9haBK6DCZzlcVsI&per_page=6")
      .then(res => res.json())
      .then(data => setPhotos(data.results))
  }, [])

  const photoImages = photos.map(photo => {
    return <img src={photo.urls.regular} className="grid-img" />
  })

  return (
    <div className="photo-container">
      {photoImages}
    </div>
  )

  // access key irSM3XZycpgVKpl8v_cZPXQzf0IJ9haBK6DCZzlcVsI
  // secret key dDysFQfis3RmzZfg3onXNzJc_5h-6qKFGJNVpfIXMuQ
}