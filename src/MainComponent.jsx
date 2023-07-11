/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./MainStyle.css";
import { useNavigate } from "react-router-dom";



export const MainComponent = ({page}) => {
  console.log('페이지출력',page);
  let navigate = useNavigate();

  return (
    <div className={`component`}>
      <div className="overlap-group">
        <div className="button" />
        <div className="element" onClick={() => {navigate(page)}}>Sub →</div>
      </div>
    </div>
  );
};
