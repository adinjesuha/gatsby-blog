import React from 'react'

import useBlog from '../../hooks/use-blog'
import Card from './card'
import './blogList.scss'

const BlogList = () => {
  const posts = useBlog()
  const featuredPost = posts[0]
  return (
    <div className="blog">
      <Card {...featuredPost} featured/>
      <div className="columns">
        {posts.slice(0).slice(1, 3).map( post => (
          <div className="column is-6" key={post.id}>
            <Card {...post}/>
          </div>
        ))}
      </div>
      <div className="columns">
        {posts.slice(3).map( post => (
          <div className="column is-4" key={post.id}>
            <Card {...post} small/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogList