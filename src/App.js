// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";


//jsx fragment helps us to return multiple div
// <> </>
// jsx should always be closed

function App() {
   const[mode,setMode]=useState('light'); 
   const[alert,setAlert]=useState(null);

   const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);

   }
   const toggleMode=()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtils - Dark Mode'
      // setInterval(() => {
      //   document.title='TextUtils is amazing website'
      // }, 2000);
      // setInterval(() => {
      //   document.title='Install TextUtils Now'
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title='TextUtils - Home'
    }
   }

  return (
    <>
{/* <Router> */}
<Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Textform heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/>
{/* <Routes> */}
          {/* <Route path='/about' element={<About/>}/> */}
          {/* <Route path='/' element={} /> */}
{/* </Routes> */}
</div>

{/* </Router> */}


    </>
  );
}

export default App;
