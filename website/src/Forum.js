import React, { Component } from "react";

class Forum extends Component{
    render() {
        return(
            <section >
            <div className="notification">
               <p> Create thread </p>            
               <p> thread n°1 <i className="far fa-comments"></i> </p>  
               <hr id="hr"/>    
               <p> thread n°2 <i className="far fa-comments"></i> </p>
            </div>
            </section>
           
        );
    }
}

export default Forum;