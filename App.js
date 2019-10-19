
/*
//begin//

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/




/*
//test1//
import React from 'react';


import "./style.css";
function App() {
  let firstName = "will";
  let lastName = "smith";
  return (
    <div>
      <img src ="/profile.jpg" className="my-profile" />
      <p> {firstName} {lastName} </p>
      
    </div>
  );
}

export default App;
*/
 



//checkpoint2//



import React from 'react';
import "./style.css";
import myphoto from "./profile2.png";
function App() {

  return (
    <div style={{border:'solid 1px black' , maxWidth:1000}}>
    <h1 className="title red">My title</h1>
    <br ></br><br ></br><br ></br><br ></br>
      <img src ="/profile.jpg" />
      <br ></br><br ></br><br ></br><br ></br><br ></br>
      <img src ={myphoto} />
    
    
    </div>
  );
}

export default App;
