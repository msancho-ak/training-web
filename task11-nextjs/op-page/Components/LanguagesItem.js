import React, { Component } from 'react';
import Image from 'next/image'

import spanishIcon from '../public/images/spain.svg'
import englishIcon from '../public/images/usa.svg'
export default class LanguagesItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className= {`languages_item ${this.props.Language === "English"? " languages_item--selected" : ""} `}>
                <span className="hideDesktop"> {this.props.Language}</span>
                <Image src={this.props.Language === "English"? englishIcon : spanishIcon} alt="" />
            </div>
        )
    }
}