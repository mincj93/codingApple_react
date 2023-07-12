/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useNavigate } from "react-router-dom";
// import "./MainStyle.css";
import MainStyle from "./MainStyle.module.css";


export const MainComponent = ({page}) => {
  // console.log('페이지출력',page);
  let navigate = useNavigate();

  return (
    <div className={MainStyle.component}>
      <div className={MainStyle.overlapGroup}>
        <div className={MainStyle.button}/>
        <div className={MainStyle.element} onClick={() => {navigate(page)}}>← 서브</div>
      </div>
    </div>
  );
};
