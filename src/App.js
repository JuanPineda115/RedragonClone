import './main.sass';
import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './components/sideBar';
import Header from './components/header'
import BigIm from './components/bigImage'

ReactDOM.render(
<>
    <Header></Header>
    <SideBar></SideBar>
    <BigIm></BigIm>
</>
    , document.getElementById("root"));