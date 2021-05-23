import React, { useEffect, useState } from 'react'
import axios from 'axios'
import laptop from '../Images/laptop.jpg'
import { Link } from 'react-router-dom'

function login() {
    return (
        <div className="main-container">
            <div className="formcontent">
                <h2 className="form-title">Member login</h2>
                <form>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="password" />

                    <button className="loginbutton">Login</button>

                    <div className="forgot">
                        <span className="forgotpass"><Link to="forgotpassword" >Forgot Password?</Link></span><span className="register"><Link to="/register">Register</Link></span>
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

export default login;
