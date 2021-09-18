import React from 'react'
import {  Link } from 'react-router-dom';

export const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Use Context</Link>
            <div clasNames="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item"> <Link className="nav-link active" aria-current="page" to="./">Home</Link> </li>
                    <li className="nav-item"> <Link className="nav-link active" aria-current="page" to="./about">About</Link> </li>
                    <li className="nav-item"> <Link className="nav-link" to="./login">Login</Link> </li>
                </ul>
            </div>
        </div>
        </nav>


    )
}
