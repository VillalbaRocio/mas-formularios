import React, {useState} from "react";
import Form from './Formulario';
import Results from "./Resultado";
import './App.css';
function App() {
    const [state, setState]= useState({
      firstName: "",
      lastNname: "",
      gmail: "",
      password: "",
      confirmpassword: ""
    });
    return (
      <div>
        <Form inputs= {state} setInputs= {setState}/>
        <Results data= {state}/>
      </div>
    );
}

export default App;