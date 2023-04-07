import React,{useContext} from 'react'
import { myContext } from './GlobalContext'

const NavBar = () => {
    const {setisLogIn,user}=useContext(myContext);

  return (
    <>
    <div className="navbar">
        <h1>Context API</h1>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li onClick={()=>{
                setisLogIn(false)
            }}>LogOut</li>
            <li style={{color:'black'}}>Login by {user.name}</li>
        </ul>
    </div>
    </>
  )
}

export default NavBar