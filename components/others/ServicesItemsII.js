import React, { Component } from "react";

import './servicesitems.css';

class ServiceItemsII extends Component{
    render(){
        return(
            <>
                <div className={this.props.cName}>
                    <div className="ser-row-info">
                        {/*<div className="flip-card">
                            <div className="flip-front">

                            </div>
                            <div className="flip-back">

                            </div>
                        </div>*/}
                    </div>                 
                </div>
            </>
        )
    }
}

export default ServiceItemsII;