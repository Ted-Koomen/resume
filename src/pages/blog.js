import React from "react"
import { Layout, BlogBanner, BlogCard } from "../components"
import "./blogIndex.scss"

const Blog = () => (
  <Layout>
    <BlogBanner />
    <div className="container">
      <BlogCard />
    </div>
  </Layout>
)

export default Blog
