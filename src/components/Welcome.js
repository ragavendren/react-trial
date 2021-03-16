import React, {Component} from 'react';

class Welcome extends Component {
    render(){
        return <h2>Welcome {this.props.name} is a {this.props.role}</h2>
    }
}

export default Welcome;