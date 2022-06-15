import React, { Component } from 'react';

import location from '../images/loc.svg'

const logoStyle={
    width:'10px',
    height: '10px'
}

export default class IslandContainerGridItem extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return( <div className={`island-container_grid_item ${this.props.mostrar? '':' hideTablet'} ${this.props.index >1 ?'hideMore':''}`}>
                    <img src={this.props.img} alt="" />
                    <div className="island-container_grid_item_descripcion">
                    <b><span>{this.props.name} - {this.props.index}</span></b>
                    <div className="island-container_grid_item_descripcion_region">
                        <img
                        style={logoStyle}
                        src={location}
                        alt=""
                        />
                        <span>{this.props.location}</span>
                    </div>
                    </div>
                </div>)
    }
}