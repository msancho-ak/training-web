import React, { Component } from 'react';
import readMore from '../public/images/readMore.svg'
import readLess from '../public/images/readLess.svg'
export default class SinopsisContainerContentReadAll extends Component{
    constructor(props){
        super(props);
    }

    readMoreOrLess = () => {
        let readMoreDiv = document.getElementById("readMoreSipnosis")
        let readMoretext = document.getElementById("readMoreText")
        let readMoreIcon = document.getElementById("readMoreIcon")
        let logoReadMore = document.getElementById("logoReadMore")
        if(window.getComputedStyle(readMoreDiv).display == 'none'){
            logoReadMore.style.display = 'block';
            readMoreDiv.style.display = 'block';
            readMoretext.innerText = "Read Less"
            readMoreIcon.src =readLess;
        }
        else{
            logoReadMore.style.display = 'none';
            readMoreDiv.style.display = 'none';
            readMoretext.innerText = "Read All"
            readMoreIcon.src =readMore;
        }
    }
    render(){
        return( <div className="sinopsis-container_content_readAll hideDesktop" onClick={this.readMoreOrLess}>
                    <img id="readMoreIcon" src={readMore} alt="" />
                    <span id="readMoreText">Read All</span>
                </div>)
    }
}