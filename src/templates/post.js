import React from 'react';
import { graphql } from 'gatsby';

import Layout from "../components/layout/layout"
import Image from '../components/image'
import SEO from "../components/seo"
import './post.scss'

export const query = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <SEO title="Blog" />
    <div className="hero-blog">
      <h1>{post.frontmatter.title}</h1>
    </div>
    <div className="content-blog">
      <p>Little Widgets is a collection of 60 pre-made Bootstrap components to suit any website: modals, sidebars, forms, notifications, website widgets. Every component is beautifully designed, coded in html/css, seamlessly animated and ready-to-use on your website. It easily can be integrated with WordPress.</p>
      <p>We have designed, coded, and animated every component, so you can now build your web projects faster. Little Widgets is compatible with Bootstrap.</p>
      <div className="content-blog__image big">
        <Image imgName="post-1.jpeg"/>
      </div>
      <h2>Pay Attention</h2>
      <p>Career growth requires that you build skills that are desirable to employers. To figure out which skills employers value most, take a look at the macro trends affecting work as well as the micro trends affecting your discipline.</p>
      <p>Technology has been displacing or evolving skill sets for centuries. (Printing press, anyone?) The invention of the internet ushered in a new era in the news and media space, with digital publishers eclipsing printed publications.</p>
      <p>Automation and robotics changed jobs in the manufacturing and construction industries — or made them obsolete altogether. The advent of IoT (internet of things) and smart devices shifted the skills required to monitor and maintain everything from water wells in Africa, to oxygen tanks in hospitals, and thermostats in houses.</p>
      <blockquote>
        <p>Include semantically-related words and phrases to increase the “relevancy” of your page and help Google understand your page.</p>
      </blockquote>
      <p>In 2011, there were still questions about which flavor of 4G would survive, and the coverage across much of the U.S. was relatively anemic. With U.S. smartphone ownership in 2011 at only 35 percent (85 percent had cell phones), Apple could afford to wait on the relatively untested 4G. </p>
      <p>The leap from a basic feature phone to Apple’s all-touch, almost all-screen iPhone and its world of entertaining apps was enough for most feature phone users. </p>
      <p><strong>Actionable takeaway:</strong> <em> It’s about fulfilling search intent and giving searchers what they want. That’s the most important step. If you don’t pull that off, no amount of “optimization” will help you rank.</em></p>
      <h2>Professional Tip</h2>
      <p>Does that involve including keywords in your meta tags? Yes, partially. However, it’s not always totally necessary, and its only part of the puzzle—a small one, at that.</p>
      <p>Did we miss any cool on‐page SEO tips in this guide? Let us know in the comments.</p>
      <div className="content-blog__image">
        <Image imgName="post-1.jpeg"/>
      </div>
      <h2>Website Forms and Modals</h2>
      <ol>
        <li>In reaction to the onslaught of digital technology and social media increasingly embedding into daily life, we are seeking authentic and immersive experiences that enable connection and intimacy.</li>
        <li>With U.S. smartphone ownership in 2011 at only 35 percent (85 percent had cell phones), Apple could afford to wait on the relatively untested 4G. </li>
        <li>The leap from a basic feature phone to Apple’s all-touch, almost all-screen iPhone and its world of entertaining apps was enough for most feature phone users. </li>
      </ol>
    </div>
    <div className="author-blog">
      <div className="author-blog__avatar">
        <Image imgName="avatar.jpeg"/>
      </div>
      <div className="author-blog__profile">
        <span className="author-blog__profile--label">WWritten by</span>
        <h3>Adin Jesuha</h3>
        <p className="author-blog__profile--about">Product designer, entrepreneur from beautiful California. Help companies growing sales through design, marketing.</p>
      </div>
    </div>
  </Layout>
);

export default PostTemplate;