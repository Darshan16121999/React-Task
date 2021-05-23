import React, { useEffect, useState } from 'react'
import axios from 'axios'
import laptop from '../Images/laptop.jpg'
import { Link } from 'react-router-dom'

function register() {
    return (
        <div className="main-container">
            <div className="formcontent">
                <h2 className="form-title">Member Signup</h2>
                <form className="form-register">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="password" />

                    <button className="signup">Sign Up</button>

                    <div className="forgot">
                        <span>If you have already registered than </span> <span className="login"><Link to="/login">Login</Link></span>
                    </div>
                </form>
            </div>
            <div className="imagecontent">
                <img src={laptop} alt="laptop" />
                <h3 className="imagetitle">DIGITAL PRODUCTS <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;MARKET PLACE
                </h3>
                <h6 className="imagetitletwo">&nbsp;Your perfect place to <br />
                      buy and sell digital goods
                </h6>

            </div>
        </div>
    );
}

export default register;