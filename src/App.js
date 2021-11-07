// import logo from './logo.svg';
import './App.css';
// import About from './Componet/About';
import { NavBar } from './Componet/NavBar';
import TextForm from './Componet/TextForm';
// import Contact from './Componet/Contact';
import Alert from './Componet/Alert';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [alert, setalert] = useState(null);
  // const showalert = (type, message) => {
  //   setalert({
  //     type: type,
  //     message: message
  //   })
  // }
  return (
    <>
      {/* <Router> */}
        <div className="container">
          <NavBar />
          <TextForm/>
          {/* <Routes>
            <Route exact path='/about' element={<About />} />
          </Routes>
          <Routes> */}
            
            {/* <Route exact path='/home' element={<TextForm showalert={showalert} Heading="Login Here" />} />
          </Routes>
          <Routes> */}
            
            {/* <Route exact path='/contact' element={<Contact/>} />
          </Routes> */}
          <Alert alertmsg={alert} />
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
