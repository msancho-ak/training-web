import React, { Component } from 'react';
import CommonItemsContainerGrid from './CommonItemsContainerGrid';

export default class CommonItemsContainer extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<div id={this.props.ID} className="common-items-container">
                    <div className="common-items-container_content">
                        <div className="common-items-container_title">
                            <div className="common-items-container_title--main">
                                <span>{this.props.title}</span>
                            </div>
                            <div className="common-items-container_title-see-all">
                                <span>See all</span>
                            </div>
                        </div>
                        {this.props.title==="Characters"? <CommonItemsContainerGrid type={this.props.title}></CommonItemsContainerGrid>:""}
                    </div>
                </div>
          )
    }
}