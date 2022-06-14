import React, { Component } from 'react';
import menuIcon from '../images/menu.svg'
import opLogo from '../images/One-Piece-Logo 1.svg'
export default class MenuContainer extends Component{
    render(){
        return(
            <div className="menu-container">
                <div className="menu-container_icon hideDesktop">
                    <img id="iconMenu" src={menuIcon} alt="" />
                </div>
                <div className="menu-container_logo">
                    <img src={opLogo} alt="" />
                </div>
            </div>
        );
    }
}