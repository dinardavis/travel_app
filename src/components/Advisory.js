import React from "react";
import { AiOutlineAlert } from "react-icons/ai"

export default function Advisory(props) {

  const [advisories, setAdvisories] = React.useState([])
    
  React.useEffect(() => {
    // fetch(`https://www.travel-advisory.info/api`)
    //   .then(res => res.json())
    //   .then(data => setAdvisories(data.data.AE))

    // console.log(advisories)
  }, [props.searchParam])

  return (
    <>
      {!advisories ? 
        <p className="loading">Loading...</p> :
        <section className="advisory-container light-mode" style={{ display: props.showAdvisoryWidget ? '': 'none'}}>
          <div className="widget-close-btn" onClick={props.toggleAdvisoryWidget}>X</div>
          <div className="advisory-content">
            <div className="advisory-icon"><AiOutlineAlert /></div>
            <div className="advisory-message-container">
              <p className="advisory-country">United Arab Emirates</p>
              <div className="advisory-divider"></div>
              <p className="advisory-score">Risk Level - 3.2 (out of 5)</p>
              <p className="advisory-footer"><span>We advise:</span><br/> Use some caution when traveling United Arab Emirates</p>   
            </div>
            {/* {fetchDataError && <div className="error-message">There was a problem retrieving the weather for that location</div>} */}
            <p className="advisory-update-time">Last Updated: 2023-09-18</p>
          </div>
        </section>
      }
    </>
  )
}
