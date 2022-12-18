import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from './Topbar'

function Homepage() {
    return (
        <div id='wrapper'>
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                   <Topbar/>
                </div>
                <Outlet/>
            </div>
        </div>
    )
}

export default Homepage