import React, { Component } from 'react'

export class Comment extends Component {
 
    render() {
        return (
            <div>
                <li>{this.props.text}</li>
            </div>
        )
    }
}


export default Comment;