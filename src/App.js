import React, { Component } from "react";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            string: "Hello fucking world from Vasya"
        }
    }
    render () {
        return (
            <>
                <h1>{this.state.string}</h1>
                <button onClick={() => this.setState({string: 'World is not fucking!'})}>Change text</button>
            </>
        )
    }
}

export default App;
