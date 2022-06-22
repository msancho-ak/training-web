import React, { Component } from 'react';
import SinopsisContainerContentTitle from './SinopsisContainerContentTitle'; 
import SinopsisContainerContentText from './SinopsisContainerContentText'; 
import SinopsisContainerContentReadAll from './SinopsisContainerContentReadAll';

export default class SinopsisContainerContent extends Component{
    render(){
        return(<div className="sinopsis-container_content">
                <SinopsisContainerContentTitle title="Sipnosis"></SinopsisContainerContentTitle>
                <SinopsisContainerContentText></SinopsisContainerContentText>
                <div className="division hideDesktop"></div>
                <SinopsisContainerContentReadAll></SinopsisContainerContentReadAll>
               </div>)
    }
}