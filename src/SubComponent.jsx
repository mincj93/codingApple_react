/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/
import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./SubStyle.css";

export const SubComponent = ({ page, className, buttonClassName, text = "Main →" }) => {
  
  console.log(page, className, buttonClassName);
  let navigate = useNavigate();

  return (
    <div className={`component`}>
      <div className="overlap-group">
        <div className='component button' />
        <div className="element" onClick={() => {navigate(page)}}>{text}</div>
      </div>
    </div>
  );
};

SubComponent.propTypes = {
  text: PropTypes.string,
};
