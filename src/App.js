import './main.sass';
import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './components/sideBar';
import Header from './components/header'
import BigIm from './components/bigImage'
import ProdTitle from './components/prodsTitle'

ReactDOM.render(
<>
    <Header></Header>
    <BigIm></BigIm>
    <ProdTitle></ProdTitle>
</>
    , document.getElementById("root"));