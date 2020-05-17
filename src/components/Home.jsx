import React from "react";
import { useHistory } from "react-router-dom";

function Home(props) {
  const { goBack } = useHistory();
  console.log(props);
  return (
    <div className="main-wraper">
      <div className="content">
        <p>Welcome to our Site</p>
        <p>We want to thank you for stopping by the site.</p>
        <p>We wanted to create a safe place where you can walk your dogs during this uncertain time</p>
        <p>Please stop by our Booking page to set something up.</p>
      </div>

    </div>
  );
}

export default Home;