
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextFrom from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [sample, setSample] = useState("booooooooooooooooo");
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000)
    const showSample=(sample)=>{
      setSample({
        sampple:sample,
      })
      setTimeout(()=>{
        setSample("we ballllinnn")
      },3000)
    }
    
    
  }
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enables","success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enables","success");
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title="Textify" about="About us" mode={mode} toggleMode={toggleMode}/>
      <strong> <Alert alert={alert}/></strong>
    <div className="container my-3">
    <Routes>
          <Route exact path="/about" element={<About sample={sample}/>}></Route>
          <Route exact path="/" element={<TextFrom showAlert={showAlert}heading="enter the text of analyze" mode={mode}/>}></Route>
    </Routes>
    </div>
    </BrowserRouter>
    </>

  );
}

export default App;
