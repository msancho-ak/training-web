import React, { Component } from 'react';
import luffy from '../images/monkeydluffy.svg'
import ace from '../images/ace.svg'
import zoro from '../images/zoro.svg'
import nico from '../images/nico.svg'
import dawn from '../images/dawnIsland.jpg'
import reverse from '../images/reverseIslando.jpg'
import gomu from '../images/gommu.svg'

import CharactersContainerGridItem from './CharactersContainerGridItem';
import IslandContainerGridItem from './IslandContainerGridItem';
import MistObjectGridItem from './MistObjectGridItem';


export default class CommonItemsContainerGrid extends Component{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.type === "Characters"){
            return (<div className='common-items-container_grid'>
                    {this.props.Characters.map( (elem, index) => 
                                                <CharactersContainerGridItem mostrar={index<2} key={index} name={elem.name} imgPath={elem.imgPath}/>)}
                </div>)
        }
        if(this.props.type === "Islands"){
            return (<div className='common-items-container_grid'>
                    {this.props.Islands.map( (elem, index) => 
                                                <IslandContainerGridItem mostrar={index!=3}  index={index} 
                                                        key={index} name={elem.name} img={elem.img} 
                                                        location={elem.location}/>)}
                </div>)
        }

        if(this.props.type === "Mist Objects"){
            return (<div className='common-items-container_grid common-items-container_grid--start'>
                    {this.props.Mist.map( (elem, index) => 
                                                <MistObjectGridItem 
                                                        key={index} name={elem.name} img={elem.img} 
                                                        description={elem.description}/>)}
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
    ],
    Islands :[
        {
            name:"Dawn Island",
            img:dawn,
            location: "East Blue"
        },
        {
            name:"Reverse Island",
            img:reverse,
            location: "East Blue"
        },
        {
            name:"Reverse Island",
            img:reverse,
            location: "East Blue"
        },
        {
            name:"Reverse Island",
            img:reverse,
            location: "East Blue"
        },
    ],
    Mist :[
        {
            name:"Gomu Gomu No Mi",
            img:gomu,
            description: "Is a Paramecia-type Devil Fruit that gives the user's body the properties of rubber, making the user a Rubber Human. It was then accidentally eaten by the series protagonist, Monkey D. Luffy."
        },
        {
            name:"Gomu Gomu No Mi",
            img:gomu,
            description: "Is a Paramecia-type Devil Fruit that gives the user's body the properties of rubber, making the user a Rubber Human. It was then accidentally eaten by the series protagonist, Monkey D. Luffy."
        },
        {
            name:"Gomu Gomu No Mi",
            img:gomu,
            description: "Is a Paramecia-type Devil Fruit that gives the user's body the properties of rubber, making the user a Rubber Human. It was then accidentally eaten by the series protagonist, Monkey D. Luffy."
        },
        {
            name:"Gomu Gomu No Mi",
            img:gomu,
            description: "Is a Paramecia-type Devil Fruit that gives the user's body the properties of rubber, making the user a Rubber Human. It was then accidentally eaten by the series protagonist, Monkey D. Luffy."
        },
    ]
}
