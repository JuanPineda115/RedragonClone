import './main.sass';
import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './components/sideBar';
import Header from './components/header'
import BigIm from './components/bigImage'
import ProdTitle from './components/prodsTitle'
import Products from './components/Products'
import IoIcons from 'react-icons/io'
//IoNotificationsCircleSharp
ReactDOM.render(
    <>
        <SideBar></SideBar>
        <Header></Header>
        <BigIm></BigIm>
        <ProdTitle></ProdTitle>
        <Products></Products>
    </>
    , document.getElementById("root"));