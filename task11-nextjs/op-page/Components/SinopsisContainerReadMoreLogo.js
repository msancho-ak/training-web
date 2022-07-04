import React, { Component } from 'react';
import logo from '../public/images/One-Piece-Logo 1.svg'

export default class SinopsisContainerReadMoreLogo extends Component{
    render(){
        return(<div id="logoReadMore" className="hideDesktop hideMore">
                    <img src={logo} alt="" />
                </div>)
    }
}