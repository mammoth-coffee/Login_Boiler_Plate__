import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Auth from './hoc/auth'


function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={ Auth(LandingPage, null )} />
            <Route exact path="/login" element={ Auth(LoginPage, false) } />
            <Route exact path="/register" element={ Auth(RegisterPage, false) } />
            {/* auth가 element(component)를 감싸줘야함 */}
            {/* Specific Component = 각 페이지 */}

            {/* <Route exact path="/" element={ < LandingPage /> } /> */}

            {/* <Route exact path="/login" element={ < LoginPage />} /> */}
            
            {/* <Route exact path="/register" element={ < RegisterPage /> } /> */}
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App;


// <div className="App">
    // <header className="App-header">
    //   <img src={logo} className="App-logo" alt="logo" />
    //   <p>
    //     Edit <code>src/App.js</code> and save to reload.
    //   </p>
    //   <a
    //     className="App-link"
    //     href="https://reactjs.org"
    //     target="_blank"
    //     rel="noopener noreferrer"
    //   >
    //     Learn React
    //   </a>
    // </header>
// </div>
