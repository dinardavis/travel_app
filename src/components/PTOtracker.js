import React from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

export default function PTOtracker(props) {
  const [ptoGoalReached, setPtoGoalReached] = React.useState(false)


ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['c', 'Blue'],
  datasets: [
    {
      label: '# of Votes',
      data: [2, 8],
      backgroundColor: [
        'rgba(147, 235, 251, 0.4)',
        'rgba(230, 171, 62, 0.4)',
      ],
      borderColor: [
        'rgba(147, 235, 251)',
        'rgba(230, 171, 62)',
      ],
      borderWidth: 1,
    },
  ],
};


  function addPTO() {

  }

  return (
    <>
    {!data ? 
    <p className="loading">Loading...</p> :
    <section className="currency-container light-mode" style={{ display: props.showPTOWidget ? '': 'none'}}>
      <div className="widget-close-btn" onClick={props.togglePTOWidget}>X</div>
      <div className="currency-content">
        <form className="currency-form">
          <p className='currency-base-rate'>Base Rate: 1 USD = 148.2858 JPY </p>
          <p className='currency-error'>Current rates are unavailable</p>
        
           
          <button
            className="update-pto-btn"
            onClick={addPTO}
          >
          Update PTO
          </button>

          <Doughnut data={data} />

        
        </form>
      </div>
    </section>
    }
</>
  )
}