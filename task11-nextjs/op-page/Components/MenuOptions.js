import React, { Component } from 'react';
import MenuItem from './MenuItem';


export default class MenuOptions extends Component{
    render(){
        return(<div id="menuOptions" className="menu_items hideMenu">
                    {this.props.opciones.map( (elem, index) => <MenuItem key={index} name={elem.name} link={elem.link}></MenuItem>)}
                    <MenuItem key={4} languages={this.props.languages}></MenuItem>
                </div>
        )
    }
}

MenuOptions.defaultProps={
    opciones : [{
        name: "Home",
        link: "#"
    }, 
    {
        name: "Characters",
        link: "#characterSection"
    }, 
    {
        name: "Islands",
        link: "#islandSection"
    }, 
    {
        name: "Mist Objects",
        link: "#mistSection"
    }],
    languages: ["English", "Spanish"]
}