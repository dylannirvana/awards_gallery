import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Planets from './Planets'
import Moons from './Moons'
import Asteroids from './Asteroids';
import Planetids from './Planetids';

const Routing = () => {
  return(
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/moons" element={<Moons />} />
        <Route path="/asteroids" element={<Asteroids />} />
        <Route path="/planetids" element={<Planetids />} />
      </Routes>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
