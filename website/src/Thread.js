import React, { Component } from "react";
import { useParams } from "react-router";

class Thread extends Component{
    constructor(props){
        super(props);
        this.state={threadID:this.props.match.params.threadID};     
    }
    render(){
        return(
            <div className="a-forum">
                {this.state.threadID}
            </div> 
        );
    }
}

export default Thread;