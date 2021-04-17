import React, { useState }  from 'react';
import ReactDOM from 'react-dom'
import Dropdown from 'react-dropdown'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/bs';

const { useState } = React;
const[status, setStatus] = useState(0);

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: true };
    }
    render() {
        return (
            <div className="SBcontainer">
                <div className="btnCont">
                    <li className="icon">
                        <AiIcons.BsX />
                    </li>
                </div>
                <nav className="barNav">
                    <div className="title">
                        <h1>MENU</h1>
                    </div>
                </nav>    
            </div>
        )
    }
}

export default SideBar;