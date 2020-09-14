import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../straightarmlogo.png'
import styled from 'styled-components'
import {NavButtonBars} from './Button'

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-light bg-danger px-sm-5 d-flex justify-content-between">
                <Link to='/' className="mx-auto">
                    <img src={logo} alt="logo"></img>
                </Link>
                <NavButtonBars>
                    <i className="fas fa-bars"></i>
                </NavButtonBars>
                
            </NavWrapper>

        )
    }
}

const NavWrapper = styled.nav`
background: var(--mainGradient);
.nav-link{
    color: var(--mainWhite) !important;
    font-sze: 1.3rem;
    text-transform: capitalize;
}
`