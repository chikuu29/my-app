// import logo from './logo.svg';
import './App.css';
import About from './Componet/About';
import { NavBar } from './Componet/NavBar';
import TextForm from './Componet/TextForm';
import Alert from './Componet/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [alert, setalert] = useState(null);
  const showalert = (type, message) => {
    setalert({
      type: type,
      message: message
    })
  }
  return (
    <>
      <Router>
        <div className="container">
          <NavBar />
          <Routes>
            <Route path='/about' element={<About />} />
          </Routes>
          <Routes>
            
            <Route path='/home' element={<TextForm showalert={showalert} Heading="Login Here" />} />
          </Routes>
          <Alert alertmsg={alert} />
        </div>
      </Router>
    </>
  );
}

export default App;
