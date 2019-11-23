import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout/layout"
import Blog from "../components/blog/blog"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Blog />
  </Layout>
)

export default IndexPage
