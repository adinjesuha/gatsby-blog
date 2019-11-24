import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import './blogList.scss'
import Card from './card'

const BlogList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              title
              excerpt
              author
              slug
              image
            }
          }
        }
      }
    }
  `)

  const posts = data.allMdx.edges
  const featuredPost = posts[0].node
  return (
    <div className="blog">
      <Card {...featuredPost} featured/>
      <div className="columns">
        {posts.slice(0).slice(1, 3).map( ({node})=> (
          <div className="column is-6" key={node.id}>
            <Card {...node}/>
          </div>
        ))}
      </div>
      <div className="columns">
        {posts.slice(3).map( ({node})=> (
          <div className="column is-4" key={node.id}>
            <Card {...node} small/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogList