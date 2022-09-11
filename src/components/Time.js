import React from "react";

const TIME_API_KEY = process.env.REACT_APP_ABSTRACT_API_KEY



export default function Time(props) {
  const [time, setTime] = React.useState("")


 
  React.useEffect(() => {
    fetch(`https://timezone.abstractapi.com/v1/current_time/?api_key=${TIME_API_KEY}&location=${props.searchParam}`)
        .then(res => res.json())
        .then(data => setTime(data.datetime))
    }, [props.searchParam])

  return (
    <div className="time-container">{time}</div>
  )
}


  
// function convertTime(locationTime) {
  // let convertedTime = locationTime.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)/) || [convertedTime];

  // if (convertedTime.length > 1) {
  //   convertedTime = convertedTime.slice (1); 
  //   convertedTime[5] = +convertedTime[0] < 12 ? 'AM' : 'PM';
  //   convertedTime[0] = +convertedTime[0] % 12 || 12;
  // }
  // return convertedTime.join ('');
// }


