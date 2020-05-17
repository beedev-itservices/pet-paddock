import React from "react";
import { useHistory } from "react-router-dom";

function Contact(props) {
  const { goBack } = useHistory();
  console.log(props);
  return (
    <div className="main-wraper">
      <button onClick={() => goBack()}>Go Back</button>
      <div className="content">
        <h2>How to reach us</h2>
      </div>
    </div>
  );
}

export default Contact;