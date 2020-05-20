import React, { Component } from "react";
class ListThread extends Component{
    render(){
        return(
            <p className="a-forum">
                <a  href="/"> {this.props.title} --> created by {this.props.pseudo} 
                <i className="far fa-comments theEnd"></i> 
                <br/>
                <p>{this.props.date}</p>
                </a> 
            </p> 
        );
    }
}

export default ListThread ;