import React from 'react'
import { Link } from 'react-router-dom';

//icons
import {MdOutlineLogout, MdAir, MdAirlineSeatReclineExtra, MdBatteryUnknown, MdDataExploration} from 'react-icons/md';
import {GiGearStick} from 'react-icons/gi';
import {FcAutomotive} from 'react-icons/fc'
import {FaCompactDisc, FaCarBattery} from 'react-icons/fa'
import {GiCircuitry} from 'react-icons/gi'
import {IoLogoGameControllerB} from 'react-icons/io'
import {BiPencil} from 'react-icons/bi'
import {RiAdvertisementFill} from 'react-icons/ri'

import './NavOpt.css'

function NavOpt(props){
    var icon = props.department;
    var path = props.path;
    
    //permanent departments
    if(icon == "logout"){
        return(
            <div className="navoption_container">
                <Link to={path} style={{textAlign: 'center'}}>
                    <MdOutlineLogout size="80%" color="#fff"/>
                </Link>
            </div>
        )
    }
    else if(icon == "transmission"){
        return(
            <div className="navoption_container">
                <Link to={path} style={{textAlign: 'center'}}>
                    <GiGearStick size="80%" color="#fff"/>
                </Link>
            </div>
        )
    }
    else if(icon == "aerodynamics"){
        return(
            <div className="navoption_container">
                <Link to={path} style={{textAlign: 'center'}}>
                    <MdAir size="80%" color="#fff"/>
                </Link>
            </div>
        )
    }
    else if(icon == "drivetrain"){
        return(
            <div className="navoption_container">
                <Link to={path} style={{textAlign: 'center'}}>
                    <FcAutomotive size="80%" color="#fff"/>
                </Link>
            </div>
        )
    }
    else if(icon == "ergonomics"){
        return(
            <div className="navoption_container">
                <Link to={path} style={{textAlign: 'center'}}>
                    <MdAirlineSeatReclineExtra size="80%" color="#fff"/>
                </Link>
            </div>
        )
    }
    else if(icon == "brakes"){
        return(
            <div className="navoption_container">
                <Link to={path} style={{textAlign: 'center'}}>
                    <FaCompactDisc size="80%" color="#fff"/>
                </Link>
            </div>
        )
    }
    else if(icon == "accumulator"){
        return(
            <div className="navoption_container">
                <Link to={path} style={{textAlign: 'center'}}>
                    <FaCarBattery size="80%" color="#fff"/>
                </Link>
            </div>
        )
    }
    else if(icon == "bms"){
        return(
            <div className="navoption_container">
                <Link to={path} style={{textAlign: 'center'}}>
                    <MdBatteryUnknown size="80%" color="#fff"/>
                </Link>
            </div>
        )
    }
    else if(icon == "circuits"){
        return(
            <div className="navoption_container">
                <Link to={path} style={{textAlign: 'center'}}>
                    <GiCircuitry size="80%" color="#fff"/>
                </Link>
            </div>
        )
    }
    else if(icon == "daq"){
        return(
            <div className="navoption_container">
                <Link to={path} style={{textAlign: 'center'}}>
                    <MdDataExploration size="80%" color="#fff"/>
                </Link>
            </div>
        )
    }
    else if(icon == "motors"){
        return(
            <div className="navoption_container">
                <Link to={path} style={{textAlign: 'center'}}>
                    <IoLogoGameControllerB size="80%" color="#fff"/>
                </Link>
            </div>
        )
    }
    else if(icon == "contentTeam"){
        return(
            <div className="navoption_container">
                <Link to={path} style={{textAlign: 'center'}}>
                    <BiPencil size="80%" color="#fff"/>
                </Link>
            </div>
        )
    }
    else if(icon == "marketing"){
        return(
            <div className="navoption_container">
                <Link to={path} style={{textAlign: 'center'}}>
                    <RiAdvertisementFill size="80%" color="#fff"/>
                </Link>
            </div>
        )
    }
    else{
        return(
            <div className="navoption_container">
                <Link to={path} style={{textAlign: 'center', textDecoration: 'none'}}>
                    <p>{icon}</p>
                </Link>
            </div>
        )
    }
}

export default NavOpt;