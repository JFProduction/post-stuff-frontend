import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Posts from './components/containers/Posts'

class App extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="main-wrapper">
                <div className="inner">
                    Hello, World!
                    <Posts />
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.getElementById("root")
)