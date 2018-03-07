import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>Hello, World!</div>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.getElementById("root")
)