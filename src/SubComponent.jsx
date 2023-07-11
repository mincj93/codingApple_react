/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./SubStyle.css";

export const SubComponent = ({ page, className, buttonClassName, text = "Main →" }) => {
  
  console.log('페이지출력',page);
  let navigate = useNavigate();

  return (
    <div className={`component`}>
      <div className="overlap-group">
        <div className={`button ${buttonClassName}`} />
        <div className="element" onClick={() => {navigate(page)}}>{text}</div>
      </div>
    </div>
  );
};

SubComponent.propTypes = {
  text: PropTypes.string,
};
