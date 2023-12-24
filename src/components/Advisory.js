import React from "react";
import { AiOutlineAlert } from "react-icons/ai"

export default function Advisory(props) {

  const [advisories, setAdvisories] = React.useState(null)
    
  React.useEffect(() => {
    fetch(`https://www.travel-advisory.info/api`)
      .then(res => res.json())
      .then(data => setAdvisories(data.data[props.countryCode]))
  }, [props.searchParam, props.countryCode])

  let alertColor; 
  let alertScore;

  if(advisories) {
    alertScore = parseFloat(advisories.advisory.message.split('of ')[1].slice(0, 3))
  }

  if(alertScore > 4.5) {
    alertColor = "rgba(251, 147, 147, 0.8)"
  } else if(alertScore > 3.5) {
    alertColor = "rgba(255, 159, 28, 0.8)"
  } else if(alertScore > 2.5) {
    alertColor = "rgba(147, 235, 251, 0.8)"
  } else if(alertScore > 0) {
    alertColor = "rgba(168, 251, 147, 0.8)"
  }

  const styles = {
    'backgroundColor' : `${alertColor}`
  }

  return (
    <>
      {!advisories ? 
        <p className="loading">Loading...</p> :
        <section className="advisory-container light-mode" style={{ display: props.showWidgets.showAdvisoryWidget ? '': 'none'}}>
          <div className="widget-close-btn" onClick={props.toggleAdvisoryWidget}>X</div>
          <div className="advisory-content">
            <div className="advisory-icon"><AiOutlineAlert /></div>
            <div className="advisory-message-container">
              <div className="advisory-country-container">
                {advisories ? <p className="advisory-country">{advisories.name}</p> : ""}
              </div>
              <div className="advisory-divider"></div>
                {advisories ? <p className="advisory-score" style={styles}>{`Risk Level - ${advisories.advisory.message.split('risk level of ')[1].split(' ').slice(0, 4).join(' ').slice(0, -1)}`}</p> : <p className="advisory-score">No advisory score available</p>}

                {advisories ? <p className="advisory-footer"><span>{`${advisories.advisory.message.split('(out of 5).')[1]}`}</span></p> : <p className="advisory-footer"><span>No advisory recommendation available</span></p>}
            </div>
            {/* {fetchDataError && <div className="error-message">There was a problem retrieving the weather for that location</div>} */}
            {advisories ?  <p className="advisory-update-time">{`Last Updated: ${advisories.advisory.updated.split(' ')[0]}`}</p> : <p className="aadvisory-update-time">Date not available</p>}
          </div>
        </section>
      }
    </>
  )
}