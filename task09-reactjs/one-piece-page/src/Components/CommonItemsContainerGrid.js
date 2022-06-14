import React, { Component } from 'react';
import CharactersContainerGridItem from './CharactersContainerGridItem';
import luffy from '../images/monkeydluffy.svg'
import ace from '../images/ace.svg'
import zoro from '../images/zoro.svg'
import nico from '../images/nico.svg'

export default class CommonItemsContainerGrid extends Component{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.type === "Characters"){
            return (<div className='common-items-container_grid'>
                    {this.props.Characters.map( (elem, index) => 
                                                <CharactersContainerGridItem key={index} name={elem.name} imgPath={elem.imgPath}/>)}
                </div>)
        }

    }
}


CommonItemsContainerGrid.defaultProps = {
    Characters :[
        {
            name:"Monkey D. Luffy",
            imgPath:luffy
        },
        {
            name:"Portgas D. Ace",
            imgPath:ace
        },
        {
            name:"Roronoa Zoro",
            imgPath:zoro
        },
        {
            name:"Nico Robin",
            imgPath:nico
        },
    ]
}