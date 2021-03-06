import React from 'react';
import * as FaIcons from 'react-icons/fa';
import logaso from '../assets/mainLogo.png';

class Header extends React.Component{
    constructor(props){
        super(props);
    }

    toggleMenu() {
        try{
            if(document.getElementById("side-menu").style.left === "0px"){
                document.getElementById("side-menu").style.left = '-300px';
                document.getElementById("page-content").style.background  ='inherit';
                document.getElementById("page-content").style.opacity  ='100%';
                document.getElementById("page-content").style.marginLeft = '0px';
            }
            else{
                document.getElementById("page-content").style.background  ='#0000';
                document.getElementById("page-content").style.opacity  ='25%';
                document.getElementById("side-menu").style.left = '0px';
                document.getElementById("page-content").style.marginLeft = '300px';
            }
        }
        catch(error){
            console.log(error);
        }
    }

    render(){
        return(
            <header className="supBar">
                <div className="btnCont">
                    <button className="icon" onClick={this.toggleMenu}>
                        <FaIcons.FaBars />
                    </button>
                </div>
                <div className="LogoContainer">
                    <img className="mainLogo" src={logaso}></img>
                </div>
            </header>
        )
    }
}

export default Header;