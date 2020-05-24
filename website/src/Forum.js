import React, { Component } from "react";
import ThreadTab from "./ThreadTab";
import axios from "axios";




class Forum extends Component{
    constructor(props){
        super(props);
        this.state={research:null,threads:[],threadsResearch:[],actived:"modal"};
        // GET /api/threads
        axios.get("/api/threads").then((response)=>response.data).then((data)=>{
            this.setState({threads:data});
            this.setState({threadsResearch:data});
        });       
    }
    activedModal = () => {
         // name of attribut
         let nam = "actived";
         // value of attribut
         this.setState({ [nam]: "modal is-active" });
      
    }

    disabledModal = () => {
        // name of attribut
        let nam = "actived";
        // value of attribut
        this.setState({ [nam]: "modal" });

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
            {/* research bar */}
            <nav className="level is-mobile">
                <div className="level-item">
                    <input className="input inputColor1" type="text" placeholder="Research thread" onChange={this.onchanged}></input>
                </div>
                {/* add thread */}
                <div className="level-left">
                    <button  className="is-rounded button  buttoncolor3 is-small" onClick={this.activedModal} ><i className="fas fa-plus-circle"></i></button> 
                </div>
            </nav>            
            <br/>
            <br/>
            <div >
            {/*  list thread (GET)*/}
            {threads}                   
            </div>
            {/* modal */}
            <div className={this.state.actived}>
            <div class="modal-background"></div>
                <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Create a thread</p>
                    <button id="modalclose" class="delete" aria-label="close" onClick={this.disabledModal}></button>
                </header>
                <section class="modal-card-body">
                    <input className="input inputColor1" type="text" placeholder="thread's title" ></input> 
                    <br/>
                    <br/>
                    <br/>
                    <button  className="is-rounded button  buttoncolor3 is-small">Create a new thread &nbsp; <i class="fas fa-globe-americas"></i></button>    
                </section>
            </div>
            </div>   
            </section>
           
        );
    }
}

export default Forum;