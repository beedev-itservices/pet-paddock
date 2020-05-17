import React from "react";
import { useHistory } from "react-router-dom";

function Booking(props) {
  const { goBack } = useHistory();
  console.log(props);
  return (
    <div className="main-wraper">
      <button onClick={() => goBack()}>Go Back</button>
     Booking Page
    </div>
  );
}

export default Booking;