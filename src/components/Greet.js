import React from 'react';

// function Greet(){
//     return <h1>Welcome Ragav </h1>
// }

const Greet = props => {
console.log(props)
return <h1>Welcome {props.name}</h1>
}

export default Greet