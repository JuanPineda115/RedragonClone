import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

class SideBar extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.setState(prevState => ({
            check: !prevState.check
        }));
    };
    render() {
        return (
            <div className="wrapper">
                <div className="Nav">
                    <li className="navIcon">
                        <FaIcons.FaBars onClick={showSidebar()} />
                    </li>
                </div>
                <nav className='barNav'>
                    <div className='sideWrap'>
                        <li className="navIcon">
                            <AiIcons.AiOutlineClose onClick={showSidebar()} />
                        </li>
                    </div>
                </nav>
            </div>
        )
    }
}

export default SideBar;