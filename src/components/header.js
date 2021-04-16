import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import * as FaIcons from 'react-icons/fa';

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <header className="supBar">
                <div className="btnCont">
                    <li className="icon">
                        <FaIcons.FaBars />
                    </li>
                </div>
                <div className="LogoContainer">
                    <img className="mainLogo" src="../src/assets/mainLogo.png"></img>
                </div>
            </header>
        )
    }
}

export default Header;