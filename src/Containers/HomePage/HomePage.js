import React, { Component } from 'react'
import './HomePage.css'

import NavBar from '../../Components/Navigation/NavBar'
import DepartmentName from '../../Components/DepartmentName/DepartmentName'

function HomePage(){
    return(
        <div className="container_layer">
            <div className="navbar">
                <NavBar/>
            </div>
            <div className="info_container">
                <DepartmentName name="Data Acquisition"/>
            </div>
        </div>
    )
}

export default HomePage;