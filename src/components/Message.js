import React, {Component} from 'react'

class Message extends Component{
    constructor() {
        super ()
        this.state = {message: "Welcome Home!"}
    }

changeState() {
    this.setState ({
    message: 'Thanks for the Click'
    })
}

    render (){
        return(
        <div>
            <h1>{this.state.message}</h1>
            <button name="click" onClick={()=>this.changeState()}>Click to subscribe</button>
        </div>
        )
    }
}

export default Message