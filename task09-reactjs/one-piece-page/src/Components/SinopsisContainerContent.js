import React, { Component } from 'react';
import SinopsisContainerContentTitle from './SinopsisContainerContentTitle'; 
import SinopsisContainerContentText from './SinopsisContainerContentText'; 

export default class SinopsisContainerContent extends Component{
    render(){
        return(<div className="sinopsis-container_content">
                <SinopsisContainerContentTitle title="Sipnosis"></SinopsisContainerContentTitle>
                <SinopsisContainerContentText></SinopsisContainerContentText>
               </div>)
    }
}