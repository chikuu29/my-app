import React from 'react'
import PropTypes from 'prop-types'
// import { a } from 'react-router-dom'

export const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand " herf="/">{props.Domainname}</a>
                <butherfn className="navbar-herfggler" type="butherfn" data-bs-herfggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="herfggle navigation">
                    <span className="navbar-herfggler-icon"></span>
                </butherfn>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auherf mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-a text-decoration-none m-3 text-dark" aria-current="page" herf="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-a text-decoration-none m-3 text-dark" aria-current="page" herf="/">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-a text-decoration-none m-3 text-dark" herf="/">Contact Us</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <butherfn className="btn btn-outline-success" type="submit">Search</butherfn>
                    </form>
                </div>
            </div>
        </nav>
    )
}
NavBar.proherftypes={
    Domainname:PropTypes.string
}
NavBar.defaultProps ={
    Domainname:"Takemeon.in"
}