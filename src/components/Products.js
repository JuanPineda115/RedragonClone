import React from 'react';
import {ProdData} from './prodsData'

class Products extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="prodsContainer">
                <ul className="prodsList">
                    {ProdData.map((val,key)=>{
                        return(
                            <li key={key} className="newProd" onClick={window.location.href = '#'}>
                                <a href='#' className="prodA">
                                    <img src={val.img} className="prodImg"></img>
                                    <h2 className="prodName">{val.name}</h2>
                                    <h4 className="proDesc">{val.desc}</h4>
                                </a>
                                <a href="#" className='infoBtn'>MAS INFORMACION</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
export default Products;