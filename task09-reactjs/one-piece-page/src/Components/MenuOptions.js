import React, { Component } from 'react';
import MenuItem from './MenuItem';
import LanguagesItem from './LanguagesItem';

export default class MenuOptions extends Component{
    render(){
        return(<div id="menuOptions" className="menu_items hideMenu">
                    {this.props.opciones.map( (elem, index) => <MenuItem key={index} name={elem.name} link={elem.link}></MenuItem>)}
                    {this.props.languages.map( (elem, index) => <MenuItem key={index} language={<LanguagesItem Language={elem}></LanguagesItem>}></MenuItem>)}
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