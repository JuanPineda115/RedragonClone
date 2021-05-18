import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import imagen from '../assets/bigIm.jpg';

class BigIm extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="bigIm">
                <img className="leImg" src={imagen}></img>
            </div>
        )
    }
}

export default BigIm;