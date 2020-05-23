import React, { Component } from "react";
import ThreadTab from "./ThreadTab";
import axios from "axios";



class Forum extends Component{
    constructor(props){
        super(props);
        this.state={research:null,threads:[],threadsResearch:[]};
        // GET /api/threads
        axios.get("/api/threads").then((response)=>response.data).then((data)=>{
            this.setState({threads:data});
            this.setState({threadsResearch:data});
        });       
    }
    
    // changing
    onchanged = (event) => {
        // name of attribut
        let nam = event.target.name;
        // value of attribut
        let val = event.target.value;
        this.setState({ [nam]: val });
        // filter title and pseudo
        let newdata = this.state.threads.filter(datum => String(datum.title).includes(val) || String(datum.creator).includes(val));
        // changing state        
        this.setState({threadsResearch:newdata});
              
    }    
     
    render() {
        // create balise 
        // insert list thread 
        let threads = [];
        this.state.threadsResearch.forEach(element => {
            threads.push(<ThreadTab
                            key={element._id} 
                            id={element._id}
                            title={element.title.toString()} 
                            pseudo={element.creator.toString()}
                            date={element.createdAt.toString()}
                            number = {element.messages.length.toString()}/>
                            );
            threads.push(<hr id="hr" key={element._id+'hr'}/>);
            
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