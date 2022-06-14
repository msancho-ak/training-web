import React, { Component } from 'react';

export default class MenuItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.link!==undefined)
            return <div className="menu_item"><a href={this.props.link}>{this.props.name}</a></div>
        else
            return <div className="menu_item">{this.props.language}</div>
    }
} 