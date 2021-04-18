import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import Dropdown from 'react-dropdown'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/bs';
import { SidebarData } from './sidebarData';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: true };
    }

    toggleVisible() {
        if (this.state.visible = true) {
            this.setState = ({
                visible: false
            });
        }
        else {
            this.setState = ({
                visible: true
            })
        }
    }

    render() {
            return (
                <div className="Sidebar">
                    <div className="btnCont">
                        <li className="icon"><AiIcons.BsX onClick={this.toggleVisible}/></li>
                    </div>
                    <div className="title">
                            <h3>MENU</h3>
                    </div>
                    <div className="sbContent">
                        <ul className="sideContent">
                            {SidebarData.map((val,key)=>{
                                <li>
                                    <h5>{val.title}</h5>
                                </li>
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