import React, { Component } from "react";
import ListThread from "./ListThread";
import axios from "axios";



class Forum extends Component{
    constructor(props){
        super(props);
        this.state={research:null,threads:[]};
        // GET /api/threads
        axios.get("/api/threads").then((response)=>response.data).then((data)=>{
            this.setState({threads:data})
        });       
    }
    
    // changing
    onchanged = (event) => {
        // name of attribut
        let nam = event.target.name;
        // value of attribut
        let val = event.target.value;
        this.setState({ [nam]: val });
        axios.get("/api/threads").then((response)=>response.data)
        // filter title and pseudo
        .then((data)=>data.filter(datum => String(datum.title).includes(val) || String(datum.creator).includes(val)))
        // changing state
        .then((data)=>{
            this.setState({threads:data})
        });       
    }

    
     
    render() {
        // create balise 
        // insert list thread 
        let threads = [];
        this.state.threads.forEach(element => {
            threads.push(<ListThread 
                            key={element._id.toString()}
                            title={element.title.toString()} 
                            pseudo={element.creator.toString()}
                            date={element.createdAt.toString()}
                            number = {element.messages.length.toString()}/>
                            );
            threads.push(<hr id="hr"/>);
        });
       

        // html
        return(            
            <section className="notification">
            <nav className="level is-mobile">
                <div className="level-item">
                    <input className="input inputColor1" type="text" placeholder="Research thread" onChange={this.onchanged}></input>
                </div>
                <div className="level-left">
                    <a  href="/" className="is-rounded button  buttoncolor3 is-small" ><i className="fas fa-plus-circle"></i></a> 
                </div>
            </nav>            
            <br/>
            <br/>
            <div > 
            {threads}                   
            </div>
            </section>
           
        );
    }
}

export default Forum;