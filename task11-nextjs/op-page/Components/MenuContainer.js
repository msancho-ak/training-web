import React, { Component } from 'react';
import menuIcon from '../public/images/menu.svg'
import opLogo from '../public/images/One-Piece-Logo 1.svg'
import Image from 'next/image'
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
                    <Image id="iconMenu" src={require('../public/images/menu.svg')} alt="" />
                </div>
                <div className="menu-container_logo">
                    <Image width={'120px'} height={"78px"} src={opLogo} alt="" />
                </div>
            </div>
        );
    }
}