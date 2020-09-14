import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class NavList extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row d-flex justify-content-around text-capitalize">
                    <Link to='/bjj'>
                        This week in bjj
                    </Link>
                    <Link to='/twitch'>
                        twitch
                    </Link>
                    <Link to='/youtube'>
                        youTube
                    </Link>
                    <Link to='/blog'>
                        blog
                    </Link>
                    
                </div>
            </div>
        )
    }
}

