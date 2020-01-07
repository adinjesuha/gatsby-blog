import React from 'react';
import { graphql } from 'gatsby';
import { Disqus } from 'gatsby-plugin-disqus'

import Layout from "../components/layout/layout"
import Image from '../components/image'
import SEO from "../components/seo"
import Card from '../components/blogList/card'
import useBlog from '../hooks/use-blog'
import './post.scss'

export const query = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        author
        image 
        excerpt
        slug
        tags
      }
      id
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => {
  const {title, tags, excerpt, image, author} = post.frontmatter
  const relatedPosts = useBlog()
  let disqusConfig = {
    // url: post.frontmatter.slug,
    // identifier: post.id,
    title: post.title,
  }
  return (
    <Layout>
      <SEO title="Blog" />
      <div className="content-blog">
        <div className="content-blog__header">
          <div className="content-blog__header--meta">
            <span>{tags}</span>
            <span>November 4</span>
          </div> 
          <h1>{title}</h1> 
          <p>{excerpt}</p>
          <div className="content-blog__image big">
            <Image imgName={image}/>
          </div>
        </div>
        <p>Little Widgets is a collection of 60 pre-made Bootstrap components to suit any website: modals, sidebars, forms, notifications, website widgets. Every component is beautifully designed, coded in html/css, seamlessly animated and ready-to-use on your website. It easily can be integrated with WordPress.</p>
        <p>We have designed, coded, and animated every component, so you can now build your web projects faster. Little Widgets is compatible with Bootstrap.</p>
        <h2>Pay Attention</h2>
        <p>Career growth requires that you build skills that are desirable to employers. To figure out which skills employers value most, take a look at the macro trends affecting work as well as the micro trends affecting your discipline.</p>
        <p>Technology has been displacing or evolving skill sets for centuries. (Printing press, anyone?) The invention of the internet ushered in a new era in the news and media space, with digital publishers eclipsing printed publications.</p>
        <p>Automation and robotics changed jobs in the manufacturing and construction industries — or made them obsolete altogether. The advent of IoT (internet of things) and smart devices shifted the skills required to monitor and maintain everything from water wells in Africa, to oxygen tanks in hospitals, and thermostats in houses.</p>
        <blockquote>
          <p>Include semantically-related words and phrases to increase the “relevancy” of your page and help Google understand your page.</p>
          <footer>
            <div className="user">
              <div className="user__avatar big">
                <Image imgName="avatar.jpeg"/>
              </div>
              <div className="user__info">
                <div className="user__info--name">{author}</div>
                <div className="user__info--meta">, Front end developer at Outer Space</div>
              </div>
            </div>
          </footer>
        </blockquote>
        <p>In 2011, there were still questions about which flavor of 4G would survive, and the coverage across much of the U.S. was relatively anemic. With U.S. smartphone ownership in 2011 at only 35 percent (85 percent had cell phones), Apple could afford to wait on the relatively untested 4G. </p>
        <p>The leap from a basic feature phone to Apple’s all-touch, almost all-screen iPhone and its world of entertaining apps was enough for most feature phone users. </p>
        <p><strong>Actionable takeaway:</strong> <em> It’s about fulfilling search intent and giving searchers what they want. That’s the most important step. If you don’t pull that off, no amount of “optimization” will help you rank.</em></p>
        <h2>Professional Tip</h2>
        <p>Does that involve including keywords in your meta tags? Yes, partially. However, it’s not always totally necessary, and its only part of the puzzle—a small one, at that.</p>
        <p>Did we miss any cool on‐page SEO tips in this guide? Let us know in the comments.</p>
        <div className="content-blog__image">
          <Image imgName="post-1.jpg"/>
          <figcaption><strong>Little widget.</strong> We have designed, coded, and animated every component.</figcaption>
        </div>
        <p>To figure out which skills employers value most, take a look at the macro trends affecting work as well as the micro trends affecting your discipline.</p>
        <h2>Website Forms and Modals</h2>
        <ol>
          <li>In reaction to the onslaught of digital technology and social media increasingly embedding into daily life, we are seeking authentic and immersive experiences that enable connection and intimacy.</li>
          <li>With U.S. smartphone ownership in 2011 at only 35 percent (85 percent had cell phones), Apple could afford to wait on the relatively untested 4G. </li>
          <li>The leap from a basic feature phone to Apple’s all-touch, almost all-screen iPhone and its world of entertaining apps was enough for most feature phone users. </li>
        </ol>
        <div className="author-blog">
          <div className="author-blog__avatar">
            <Image imgName="avatar.jpg"/>
          </div>
          <div className="author-blog__profile">
            <div className="author-blog__profile--label">Written by</div>
            <div className="author-blog__profile--author">{author}</div>
            <p className="author-blog__profile--about">Front-end developer, JAMStack lover and UI  designer, entrepreneur from beautiful Honduras. Help companies growing sales through design.</p>
          </div>
        </div>
        <Disqus config={disqusConfig} />
      </div>
      <div className="releated-posts">
        <h2 className="title is-2 has-text-grey">Suggested articles</h2>
        <div className="columns">
          {relatedPosts.slice(0).slice(1, 4).map( post => (
            <div className="column is-4" key={post.id}>
              <Card {...post} small/>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
};

export default PostTemplate;