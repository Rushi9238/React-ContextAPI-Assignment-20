import './App.css';
import React, { useContext } from 'react'
import Home from './Componets/Home';
import NavBar from './Componets/NavBar';
import Login from './Componets/Login';
import { myContext } from './Componets/GlobalContext';

function App() {
const {isLogIN}=useContext(myContext)
console.log(isLogIN);
  return (
    <>
    <div style={{background:isLogIN ? '#BA90C6':'#FFBFA9'}} className="App">
      {/* <NavBar/>
      <Home/> */}
      {/* <Login/> */}
      {
        isLogIN ? <div  className="App"><NavBar/><Home/> </div>: <Login/>
      }
      </div>
    </>
  );
}

export default App;
