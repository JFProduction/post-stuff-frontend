import React, { Component } from 'react'
import { config, APIManager } from '../../utils'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'

class Posts extends Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        APIManager.get("http://" + config.constants.HOST_IP + ":" + config.constants.HOST_PORT + "/api/posts", 
            null, (err, resp) => {
                if (err) {
                    console.log(err)
                } else {
                    this.state.setState({
                        posts: resp.data
                    })
                }
            })
    }

    render() {
        let { posts } = this.state

        return (
            <MuiThemeProvider>
                { posts }<br/>
                <RaisedButton label='press me' 
                    onClick={ () => { alert('hello world!') } } />
            </MuiThemeProvider>
        )
    }
}

export default Posts