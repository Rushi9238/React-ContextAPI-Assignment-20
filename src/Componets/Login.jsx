import React, { useContext } from 'react'
import { myContext } from './GlobalContext'

const Login = () => {
    const { setisLogIn, user, setuser } = useContext(myContext);

    return (
        <>
            <div className="login">
                <h1>LOGIN Page</h1>
                <div className="userName">
                    <label>UserName:</label>
                    <input type="text" name="" id="" onChange={(e) => {
                        setuser({
                            ...user,
                            name: e.target.value
                        })
                    }} />
                </div>
                <div className="userPassword">
                    <label>Password:</label>
                    <input type="password" name="" id="" onChange={(e) => {
                        setuser({
                            ...user,
                            password: e.target.value
                        })
                    }} />
                </div>
                <div className='btn'>
                    <button onClick={() => {
                       
                            if ((user.name === 'Rushi' || user.name === 'Admin') && (user.password === 'rushi@1234' || user.password === 'admin@1234'|| user.password!=='')) {
                                setisLogIn(true)
                            }
                        
                       
                        else {
                            alert("Enter Valid creaditiol")
                        }
                    }}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default Login