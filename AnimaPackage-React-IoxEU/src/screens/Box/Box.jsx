import React from "react";
import { Component } from "../../components/Component";
import "./style.css";

export const Box = () => {
  return (
    <div className="box">
      <div className="component-wrapper">
        <Component className="component-1" />
      </div>
    </div>
  );
};
