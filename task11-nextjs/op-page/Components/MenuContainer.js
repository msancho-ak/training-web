import React, { Component } from 'react';
import menuIcon from '../public/images/menu.svg'
import opLogo from '../public/images/One-Piece-Logo 1.svg'
import closeMenu from '../public/images/close.svg'
export default class MenuContainer extends Component{

    constructor(props){
        super(props)
    }
    
    mostrarMenu = () => {
        let menuOptions = document.getElementById("menuOptions")
        let iconMenu = document.getElementById("iconMenu")
        if(window.getComputedStyle(menuOptions).display == 'none'){
            menuOptions.style.display = 'block';
            iconMenu.src =closeMenu;
        }
        else{
            menuOptions.style.display = 'none';
            iconMenu.src =menuIcon;
        }
    }
    render(){
        return(
            <div className="menu-container">
                <div className="menu-container_icon hideDesktop" onClick={this.mostrarMenu}>
                    <img id="iconMenu" src={menuIcon} alt="" />
                </div>
                <div className="menu-container_logo">
                    <img src={opLogo} alt="" />
                </div>
            </div>
        );
    }
}