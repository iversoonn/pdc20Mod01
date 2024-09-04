import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Mod01Registration from './Mod01Registration';
import GreetHello from './Greetings/GreetHello';
import Homepage from './Greetings/Conditionals/Homepage';
import LogAdmin from './Dashboard/LogAdmin';
import ClassDemo from './ComponentDemo/ClassDemo';
import FunctionDemo from './ComponentDemo/FunctionalDemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClassDemo/>
    <FunctionDemo/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
