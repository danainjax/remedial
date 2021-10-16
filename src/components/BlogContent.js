import React from 'react'
class BlogContent extends React.Component {
  render(props) {
    return (
      <div>
        <h1> {this.props.title} </h1>
        <p>{this.props.text}</p>
        <img src={this.props.image} alt={this.props.title}></img>
      </div>
    )
  }
}

export default BlogContent
