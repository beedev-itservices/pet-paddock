import React from "react";
import { useHistory } from "react-router-dom";

function Home(props) {
  const { goBack } = useHistory();
  console.log(props);
  return (
    <div className="main-wraper">
      <button onClick={() => goBack()}>Go Back</button>
      Home Page
    </div>
  );
}

export default Home;