import React, { Component } from 'react';

export default class SinopsisContainerContentTitle extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<div className="sinopsis-container_content_title">
                <span>{this.props.title}</span>
            </div>)
    }
}