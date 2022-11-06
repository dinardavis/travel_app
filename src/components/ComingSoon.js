import React from "react";


export default function ComingSoon(props) {

  const styles = {
    visibility: props.isVisible ? "visible" : "hidden",
  }

  return (
    <div className="widgets coming-soon" style={styles}>
      <p>New Features Coming Soon</p>
    </div>
  )
}