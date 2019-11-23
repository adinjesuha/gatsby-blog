import React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"

import './blog.scss'
import Image from '../image'

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              title
              excerpt
              slug
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
      <div className="c-card featured">
        <div className="c-card__content">
          <div className="c-card__content--meta">
            <span>Featured Article</span>
          </div>
          <h1 className="title is-1 is-spaced">
            <Link to={featuredPost.frontmatter.slug}>{featuredPost.frontmatter.title}</Link>
          </h1>
          <p className="subtitle is-size-4">{featuredPost.frontmatter.excerpt}</p>
        </div>
        <div className="c-card__image">
          <Link to={featuredPost.frontmatter.slug}>
            <Image imgName="example.jpeg" />
          </Link>
        </div>
      </div>
      <div className="columns">
        {posts.slice(1).slice(1, 3).map( ({node})=> (
          <div className="column is-6" key={node.id}>
            <div className="c-card">
              <Link to={node.frontmatter.slug}>
                <div className="c-card__image">
                  <Image imgName="example.jpeg" />
                </div>
              </Link>
              <div className="card__content">
                <div className="c-card__content--meta">
                  <span>Recipes</span>
                </div>
                <h2 className="title is-4 is-spaced">
                  <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
                </h2>
                <p>{node.frontmatter.excerpt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="columns">
        {posts.slice(4).map( ({node})=> (
          <div className="column is-4" key={node.id}>
            <div className="c-card">
              <Link to={node.frontmatter.slug}>
                <div className="c-card__image small-image">
                  <Image imgName="example.jpeg" />
                </div>
              </Link>
              <div className="card__content">
                <div className="c-card__content--meta">
                  <span>Recipes</span>
                </div>
                <h2 className="title is-4 is-spaced">
                  <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
                </h2>
                <p>{node.frontmatter.excerpt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog