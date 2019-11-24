import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout/layout"
import BlogList from "../components/blogList/blogList"

const IndexPage = () => (
  <Layout>
    <SEO title="Blog" />
    <BlogList />
  </Layout>
)

export default IndexPage
