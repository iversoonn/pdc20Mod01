import React from "react";
// import "./header.css";
import Intro from "./Intro";
import Body from "./Body";
import Conclusion from "./Conclusion";

function mainParent() {
  return (
    <div>
      <p class="header">Welcome to my Home Page</p>
      <Intro />
      <Body />
      <Conclusion />
    </div>
  );
}

export default mainParent;
