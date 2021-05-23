import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'


export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    useEffect(() => {

    }, [])

    function submit(e) {
        e.preventDefault();
        var data = {
            email: email,
            password: password
        }
        axios.post('http://127.0.0.1:5000/users/login', data).then(res => {
            if (res.data.success) {
                alert(res.data.msg)
            } else {
                alert(res.data.msg)
            }
            setEmail("")
            setPassword("")
        }).catch(err => {
            console.log(err);
        })
    }


    return (
        <div>
            <Nav />
            <div className="">

            </div>
            <form onSubmit={e => { submit(e) }}>

            </form>
            <span>Don't have an account <Link to="/signup">Register</Link></span>
        </div>
    );
}
