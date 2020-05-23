import React, { Component } from "react";
class ListThread extends Component{
    render(){
        return(
            <div className="a-forum">
                <a  href="/"> {this.props.title} --> created by {this.props.pseudo} 
                <i className="far fa-comments theEnd"></i><i className="theEnd"> {this.props.number} &nbsp; </i> 
                <br/>
                <p>{this.props.date}</p>
                </a> 
            </div> 
        );
    }
}

export default ListThread ;