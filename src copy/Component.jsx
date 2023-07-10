/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style_copy.css";
import { useNavigate } from "react-router-dom";

export const Component = (page) => {
  console.log(page);
  let navigate = useNavigate();

  return (
    <div className={`component`}>
      <div className="overlap-group">
        <div className="button" />
        <div className="element" onClick={navigate("./MainPage")}>확인 →</div>
      </div>
    </div>
  );
};
