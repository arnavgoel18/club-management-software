import React, { Component } from 'react'
import './DepartmentName.css'

function DepartmentName(props){
    var department = props.name;
    return(
        <div className="department_name-container">
            <div className="department_name">{department}</div>
        </div>
    )
}

export default DepartmentName;