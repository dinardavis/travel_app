import Photos from "./components/Photos"
import Weather from "./components/Weather"




export default function App() {
  return (
    <div className="main-container">
      <h1 className="main-header-one">Don't Dream About It.</h1>
      <h1 className="main-header-two">Be About It.</h1>
      <div className="info-container">
        <Weather />
        <Photos />
      </div>

    </div>

  
  )
}