import React, { Component } from 'react';

export default class MistObjectGridItem extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return(<div className="mist-objects-container_grid_item">
                <img src={this.props.img} alt="" />
                <div className="mist-container_grid_item_descripcion">
                <b><span>{this.props.name}</span></b>
                <span>{this.props.description}</span>
                </div>
            </div>)
    }
}