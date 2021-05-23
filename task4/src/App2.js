import logo from './logo.svg';
import { useState } from 'react'
import './App.css';
import axios from 'axios'

function App2() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errormssg, setErrormssg] = useState('')

    function submit(e) {
        e.preventDefault()
        // console.log(email, password)

        axios.post(
            'http://localhost:5000/login',
            {
                email: email,

                password: password
            }


        ).then(res => {
            setErrormssg(res.data.msg.id)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="container">
            <div className="incontainer">
                <h1 className="title-form">Welcome Back!</h1>
                <span className="data-form">To Connected with us please Login <br></br> with your personal info.</span>
                <button className="sign-in">Sign Up</button>
            </div>

            <h1 className="title-main" style={{ marginRight: "90px" }}>Login</h1>
            <div className="signup-form">
                <form onSubmit={e => { submit(e) }}>

                    <input type="email" value={email} placeholder="Email" onChange={e => { setEmail(e.target.value) }}></input><br></br>
                    <input type="password" value={password} placeholder="Password" onChange={e => { setPassword(e.target.value) }}></input><br></br><br></br><br></br><br></br><br></br>
                    <div className="error-message"> {errormssg} </div>
                    <button type="submit" className="sign-up" style={{ marginTop: "-100px" }} >Sign In</button>
                </form>
            </div>
        </div>
    );
}

export default App2;