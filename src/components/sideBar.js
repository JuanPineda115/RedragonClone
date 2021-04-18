import React, { useState } from 'react';
import * as AiIcons from 'react-icons/bs';
import { SidebarData } from './sidebarData';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: true };
    }

    toggleVisible() {
        if (this.state.visible) {
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
                        <li className="icon"><AiIcons.BsX onClick={this.toggleVisible()}/></li>
                    </div>
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