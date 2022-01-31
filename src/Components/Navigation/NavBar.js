import React, { Component } from 'react'
import NavOpt from '../NavOption/NavOpt';
import Separator from '../NavOption/Separator';

import './NavBar.css'

function NavBar(){
    return(
        <div className="mask">
            <div className="navbar_container">
                
                <div className="navoption">
                    <NavOpt department="logout" path="/login"/>
                    <p style={{color: '#fff'}} className="post-icon_para">Logout</p>
                </div>

                <Separator/>
                
                <div className="navoption">
                    <NavOpt department="transmission" path="/transmission"/>
                    <p style={{color: '#fff'}} className="post-icon_para">Transmission</p>
                </div>
                <div className="navoption">
                    <NavOpt department="aerodynamics" path="/aerodynamics"/>
                    <p style={{color: '#fff'}} className="post-icon_para">Aerodynamics</p>
                </div>
                <div className="navoption">
                    <NavOpt department="drivetrain" path="/drivetrain"/>
                    <p style={{color: '#fff'}} className="post-icon_para">Drive Train</p>
                </div>
                <div className="navoption">
                    <NavOpt department="ergonomics" path="/ergonomics"/>
                    <p style={{color: '#fff'}} className="post-icon_para">Driver Ergonomics</p>
                </div>
                <div className="navoption">
                    <NavOpt department="brakes" path="/brakes"/>
                    <p style={{color: '#fff'}} className="post-icon_para">Brakes</p>
                </div>
                <div className="navoption">
                    <NavOpt department="accumulator" path="/accumulator"/>
                    <p style={{color: '#fff'}} className="post-icon_para">Accumulator</p>
                </div>
                <div className="navoption">
                    <NavOpt department="bms" path="/bms"/>
                    <p style={{color: '#fff'}} className="post-icon_para">BMS</p>
                </div>
                <div className="navoption">
                    <NavOpt department="circuits" path="/circuits"/>
                    <p style={{color: '#fff'}} className="post-icon_para">Circuits</p>
                </div>
                <div className="navoption">
                    <NavOpt department="daq" path="/daq"/>
                    <p style={{color: '#fff'}} className="post-icon_para">DAQ</p>
                </div>
                <div className="navoption">
                    <NavOpt department="motors" path="/motors"/>
                    <p style={{color: '#fff'}} className="post-icon_para">Motors and Controllers</p>
                </div>
                <div className="navoption">
                    <NavOpt department="contentTeam" path="/contentTeam"/>
                    <p style={{color: '#fff'}} className="post-icon_para">Content Writing Team</p>
                </div>
                <div className="navoption">
                    <NavOpt department="marketing" path="/marketing"/>
                    <p style={{color: '#fff'}} className="post-icon_para">Marketing Team</p>
                </div>
                
                <Separator/>

                <div className="navoption">
                    <NavOpt department="E1" path="/E1"/>
                    <p style={{color: '#fff'}} className="post-icon_para">Event 1</p>
                </div>
                <div className="navoption">
                    <NavOpt department="E2" path="/E2"/>
                    <p style={{color: '#fff'}} className="post-icon_para">Event 2</p>
                </div>
                <div className="navoption">
                    <NavOpt department="E3" path="/E3"/>
                    <p style={{color: '#fff'}} className="post-icon_para">Event 3</p>
                </div>
                
            </div>
        </div>
    )
}

export default NavBar;