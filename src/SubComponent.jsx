/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/
import React from "react";
import { useNavigate } from "react-router-dom";
// import "./SubStyle.css";
import SubStyle from './SubStyle.module.css';

export const SubComponent = ({ page }) => {
  
  let navigate = useNavigate();

  return (
    <div className={SubStyle.component}>
      <div className={SubStyle.overlapGroup}>
        <div className={SubStyle.button} />
        <div className={SubStyle.element} onClick={() => {navigate(page)}}>메인 →</div>
      </div>
    </div>
  );
};
