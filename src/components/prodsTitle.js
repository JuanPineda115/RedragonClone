import React from 'react';

class ProdTitle extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="prodWrap">
                <div className="prodTitle">
                    <h2>NUESTROS PRODUCTOS</h2>
                    <div className="separator">
                        <div className="sep"></div>
                        <h4 className='dest'>DESTACADOS</h4>
                        <div className="sep"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProdTitle;