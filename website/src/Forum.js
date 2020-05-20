import React, { Component } from "react";
import ListThread from "./ListThread";

class Forum extends Component{
    constructor(props){
        super(props);
        this.state={research:""}
    }
    // changing
    onchanged = (event) => {
        // name of attribut
        let nam = event.target.name;
        // value of attribut
        let val = event.target.value;
        this.setState({ [nam]: val });
        console.log(val);
    }
    render() {
        return(            
            <section>
            <nav className="level is-mobile">
                <div className="level-item">
                    <input className="input" type="text" placeholder="Research thread" onChange={this.onchanged}></input>
                </div>
                <div className="level-left">
                    <a  href="/" className="is-rounded button  buttoncolor3 is-small" ><i className="fas fa-plus-circle"></i></a> 
                </div>
            </nav>            
            <br/>
            <br/>
            <div className="notification">       
               <br/>    
               <ListThread title="what is dugeon and dragon" pseudo="debzou" date="15/04/2020 10:05" />
               <hr id="hr"/>    
               <ListThread title="what is dugeon and dragon" pseudo="debzou" date="15/04/2020 10:05" />
               <br/>               
            </div>
            </section>
           
        );
    }
}

export default Forum;