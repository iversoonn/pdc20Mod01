import React from "react";
import "./App.css";
import MainParent from "./mainParent";
import ClassDemo from './ComponentDemo/ClassDemo';
import FunctionDemo from './ComponentDemo/FunctionalDemo';

function App() {
  return (
    <div>
      <ClassDemo />
      <FunctionDemo/>
    </div>
  );
}

export default App;
