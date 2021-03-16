import React, {Component} from 'react';

class Counter extends Component{
    constructor (props){
        super(props)

        this.state = {
            counter:0
        }
    }

    increment (){
        this.setState({
            counter: this.state.counter + 1
        },
        ()=> {
        console.log('Callback Value', this.state.counter)})
    }
    
    render(){
        return(
            <div>
                <div>Counter - {this.state.counter}</div>
                <button name="count" onClick={()=>this.increment()}>Add</button>
            </div>
        )
    }
}

export default Counter;