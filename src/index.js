import React from 'react-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import POPOSList from './POPOSList.js'
import About from './About.js'




ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<POPOSList />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
