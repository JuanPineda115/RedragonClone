import './main.sass';
import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './components/sideBar';
import Header from './components/header'
import BigIm from './components/bigImage';
import ProdTitle from './components/prodsTitle';
import Products from './components/Products';
import Chat from './components/chat'
import * as IoIcons from 'react-icons/io';

ReactDOM.render(
    <div className="page-container">
        <div className="navbar">
            <SideBar></SideBar>
        </div>
        <div id="page-content">
            <Header></Header>
            <BigIm></BigIm>
            <ProdTitle></ProdTitle>
            <Products></Products>
        </div>
        <button className="noti">
            <IoIcons.IoIosNotifications />
            <div className="notiText">
                <h4>Bloqueaste nuestras notificaciones.</h4>
            </div>
        </button>
        <Chat></Chat>
    </div>
    , document.getElementById("root"));