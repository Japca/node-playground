import React, { Component } from 'react'



class HelloWorld extends Component {

     render() {
         let hello = `Hello ${this.props.tech}`
        return(
          <h1>{hello} </h1>
        );
     }
}

export default HelloWorld;
