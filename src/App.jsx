import React from 'react';
import Giphy from "./components/Giphy";
import "./App.css"

const App = ()=>{
    return <div>
        
        <header className="App-header">
      <h1>WELCOME TO YOUR GIPHY</h1>
        
      <a> IRON MAN GIPHY</a>
      <br></br>
      <a> SEARCH YOUR GIPHY</a>
    <div className="row"><Giphy/></div>
          
      </header>
    </div>
}

export default App;