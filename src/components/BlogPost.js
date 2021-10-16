import React, { Component } from 'react'
import BlogContent from './BlogContent'
import Comment from './Comment'
import SpaceMountain from '../images/space mountain.jpeg'
import RockinRollercoaster from '../images/rocking.jpeg'

export class BlogPost extends Component {
  render() {
    return (
      <div>
        <BlogContent
          text='Space Mountain is a ride with unparalleled out-of-this-world...'
          title='Space Mountain'
          image={SpaceMountain}
        />
        <Comment text={'This is the first comment'} />

        <BlogContent
          text='Rockin Rollercoaster is Aerosmith heavy and a lot of guitar riffs including an upside down revolution...'
          title='Rockin Rollercoaster'
          image={RockinRollercoaster}
        />
        <Comment text={'This is the second posts comment'} />
        <Comment text={'practice in passing text to the comment component'} />
      </div>
    )
  }
}

export default BlogPost
