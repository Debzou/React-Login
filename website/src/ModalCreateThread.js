import React, { Component } from "react";

class ModalCreateThread extends Component{
    constructor(props){
        super(props);
        this.state={active:this.props.actived};         
    }        
   
    
    off = () => {
        // name of attribut
        let nam = "active";
        // value of attribut
        this.setState({ [nam]: "modal" });
    }
     
    render() {
         // html
        return(        
            <div className={this.state.active}>
                <div className="modal-background"></div>
                <div className="modal-content"></div>   
                <button className="modal-close is-large" aria-label="close" onClick={this.off}></button>
            </div>          
        );
    }
}

export default ModalCreateThread;