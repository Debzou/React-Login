import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
class ThreadTab extends Component{
    render(){
        return(
            <div className="a-forum" >
                <Link to={'/thread/' + this.props.id}> {this.props.title} --> created by {this.props.pseudo} 
                <i className="far fa-comments theEnd"></i><i className="theEnd"> {this.props.number} &nbsp; </i> 
                <br/>
                <p>{this.props.date}</p>
                </Link> 
            </div> 
        );
    }
}

export default ThreadTab ;