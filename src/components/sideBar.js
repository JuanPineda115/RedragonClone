import React, { useState } from 'react';
import * as AiIcons from 'react-icons/bs';
import { SidebarData } from './sidebarData';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: true };
    }

    ToggleMenu(){
        document.getElementById("side-menu").style.width = '0';
        document.getElementById("page-content").style.marginLeft = '0';
        document.getElementById("page-content").style.opacity  ='100%';
    }

    render() {
            return (
                <div id="side-menu" className="Sidebar">
                    <button className="icon" onClick={this.ToggleMenu}><AiIcons.BsX /></button>
                    <div className="title">
                            <h3>MENU</h3>
                    </div>
                    <div className="sbContent">
                        <ul className="sbUL">
                            {SidebarData.map((val,key)=>{
                                return(
                                <li key={key} className="row" onClick={window.location.href = '#'}>
                                    <h5>{val.title}</h5>
                                </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="sbFooter">
                        <input className="searchInput"></input>
                    </div>
                </div>
            )
    }
}

export default SideBar;