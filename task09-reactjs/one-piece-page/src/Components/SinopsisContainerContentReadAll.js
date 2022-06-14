import React, { Component } from 'react';
import readMore from '../images/readMore.svg'

export default class SinopsisContainerContentReadAll extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return( <div className="sinopsis-container_content_readAll hideDesktop">
                    <img id="readMoreIcon" src={readMore} alt="" />
                    <span id="readMoreText">Read All</span>
                </div>)
    }
}