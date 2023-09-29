import React, { Component } from "react";

import './servicesitems.css';

class ServiceItems extends Component{
    render(){
        return(
            <>
                {/*<div className={this.props.cName}>
                    <div className="ser-images">
                        <img src={this.props.image1}></img>
                    </div>
                    <div className="ser-info">
                        <div className="info-detail">adios</div>
                        <div className="titulo-ser">
                            <h2>{this.props.title}</h2>
                        </div>
                        <div className="info-detail">adios</div>
                    </div>
                    <div className="ser-images">
                        <img src={this.props.image1}></img>
                    </div>
                </div>*/}
                <div className={this.props.cName}>
                    <div className="all-images">
                        <a className="image1" href="/">
                            <img src={this.props.image1} alt=""/>
                        </a>  
                        <a className="image1" href="/">
                            <img src={this.props.image3} alt=""/>
                        </a> 
                        <a className="image1" href="/">
                            <img src={this.props.image6} alt=""/>
                        </a>
                        <a className="image1" href="/">
                            <img src={this.props.image2} alt=""/>
                        </a>
                        <a className="image1" href="/">
                            <img src={this.props.image4} alt=""/>
                        </a>
                        <a className="image1" href="/">
                            <img src={this.props.image5} alt=""/>
                        </a>
                        <div className="ser-title">
                            <h1>{this.props.title}</h1>
                            <ul>
                                <li>{this.props.info1}</li>
                                <li>{this.props.info2}</li>
                                <li>{this.props.info3}</li>
                                <li>{this.props.info4}</li>
                                <li>{this.props.info5}</li>
                            </ul>
                        </div>
                    </div>                 
                </div>
            </>
        )
    }
}

export default ServiceItems;