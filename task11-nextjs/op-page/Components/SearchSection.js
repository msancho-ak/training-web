import React, { Component } from 'react';

export default class SearchSection extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<div className="searchRegion">
                    <div className="common-items-container_content">
                        <input
                        type="text"
                        className="searchElement"
                        placeholder={this.props.PlaceHolder} 
                        />
                    </div>
                </div>
        )
    }
}