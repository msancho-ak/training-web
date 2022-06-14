import React, { Component } from 'react';
import SinopsisContainerImage from './SinopsisContainerImage';
import SinopsisContainerReadMoreLogo from './SinopsisContainerReadMoreLogo'; 
import SinopsisContainerContent from './SinopsisContainerContent';

export default class SinopsisContainer extends Component{
    render(){
        return(<div className="sinopsis-container">
                    <SinopsisContainerImage></SinopsisContainerImage>
                    <SinopsisContainerReadMoreLogo></SinopsisContainerReadMoreLogo>
                    <SinopsisContainerContent></SinopsisContainerContent>
                </div>)
    }


}