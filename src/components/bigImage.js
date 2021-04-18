import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';

class BigIm extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="bigIm">
                <img className="leImg" src="../src/assets/bigIm.jpg"></img>
            </div>
        )
    }
}

export default BigIm;