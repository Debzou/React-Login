import React, { Component } from "react";
import ThreadTab from "./ThreadTab";
import axios from "axios";
// forum
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';




class Forum extends Component{
    constructor(props){
        super(props);
        this.state={research:null,
            threads:[],
            threadsResearch:[],
            actived:"modal",
            title:"",
            message:"Your first message"};
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
    
    // message forum 
    setmessage = (event) => {
        this.setState({ message: event });
    }

    // changing title
    setTitle = (event) => {
        // name of attribut
        let nam = event.target.name;
        // value of attribut
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    // post thread
    postnewthread = () =>{
        if (localStorage.getItem('idStorage')){
            // connected on the customer
            // check if the customser is connected on the server
            axios.post("/api/thread", {
                idCreator : localStorage.getItem('idStorage'),
                creator : localStorage.getItem('usernameStorage'),
                title : this.state.title,
                message : this.state.message,
            })
            .then((response) => response.data)
            .then(data => {
                if (data==='done'){
                    this.disabledModal();
                    let newdata = this.state.threads;
                }
            })
        }else{
            // connected on the customer
            alert('you must be connected');
        }
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
                    <input className="input inputColor1" type="text" name="research" placeholder="Research thread" onChange={this.onchanged}></input>
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
            <div className="modal-background"></div>
                <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Create a thread</p>
                    <button id="modalclose" className="delete" aria-label="close" onClick={this.disabledModal}></button>
                </header>
                <section className="modal-card-body">
                    <input className="input inputColor1" name="title" type="text" placeholder="thread's title" onChange={this.setTitle} ></input> 
                    <br/>
                    <br/>
                    <ReactQuill theme="snow" value={this.state.message} onChange={this.setmessage}/>
                    <br/>
                    <button onClick={this.postnewthread}  className="is-rounded button  buttoncolor3 is-small">Create a new thread &nbsp; <i className="fas fa-globe-americas"></i></button>    
                </section>
            </div>
            </div>   
            </section>
           
        );
    }
}

export default Forum;