import React from "react";
import {useHistory } from "react-router-dom";

function About(props) {
  const {goBack } = useHistory();
  console.log(props);
  return (
    <div className="main-wraper">
      <button onClick={() => goBack()}>Go Back</button>
      <div className="content">
        <p>About the Owners</p>
      </div>
    </div>
  );
}

export default About;