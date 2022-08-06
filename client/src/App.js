import logo from './logo.svg';
import './App.css';
import style from './App.module.css';
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

import Header from './components/views/Header/Header'
import LeftNav from './components/views/LeftNav/LeftNav'
import RightNav1 from './components/views/RightNav/RightNav1'
import RightNav2 from './components/views/RightNav/RightNav2'

import MainPage from './components/views/MainPage/MainPage'

import LinkStorePage from './components/views/LinkStorePage/LinkStorePage'
import ImageUpload from './components/views/ImageUploadPage/ImageUpload'
import MemoUpload from './components/views/MemoPage/MemoUpload'
import FileUploadPage from './components/views/FileUploadPage/FileUploadPage'
import MyProfilePage from './components/views/MyProfilePage/MyProfilePage'

function App() {
  return (
    <div className="App">
      <div id={style.wrap}>

        < Header />
        < LeftNav />
       
        {/* <div id={style.contents}>
            <div id={style.contents_wrap}> */}

                <Router>
            
                    <Routes>
                        <Route exact path="/" element={ < MainPage /> } />
                        <Route exact path="/linkstore" element={ < LinkStorePage /> } />
                        <Route exact path="/imagestore" element={ < ImageUpload /> } />
                        <Route exact path="/memostore" element={ < MemoUpload /> } />
                        <Route exact path="/filestore" element={ < FileUploadPage /> } />
                        <Route exact path="/myprofilepage" element={ < MyProfilePage /> } />
                        <Route exact path="/login" element={ Auth(LoginPage, false) } />
                        <Route exact path="/register" element={ Auth(RegisterPage, false) } />

                        {/* <Route exact path="/" element={ Auth(LandingPage, null )} /> */}
                        {/* <Route exact path="/login" element={ Auth(LoginPage, false) } /> */}
                        {/* <Route exact path="/register" element={ Auth(RegisterPage, false) } /> */}
                    </Routes>
            
                </Router>
            {/* </div>
         </div> */}

        < RightNav1 />
        < RightNav2 />

      </div>
    </div>
  );
}

export default App;
