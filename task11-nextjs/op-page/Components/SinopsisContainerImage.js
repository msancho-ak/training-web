import React, { Component } from 'react';
import mainImage from '../public/images/mainImage.svg'
import Image from 'next/image'

export default class SinopsisContainerImage extends Component{
    render(){
        return(<div className="sinopsis-container_image">
                    <Image src={mainImage} alt="" />
                </div>)
    }
}