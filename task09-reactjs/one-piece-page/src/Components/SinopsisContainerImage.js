import React, { Component } from 'react';
import mainImage from '../images/mainImage.svg'

export default class SinopsisContainerImage extends Component{
    render(){
        return(<div className="sinopsis-container_image">
                    <img src={mainImage} alt="" />
                </div>)
    }
}