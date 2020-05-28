import React from "react"
import { Layout, BlogBanner, BlogCard } from "../components"
import "./blogIndex.scss"

const blogInfo = [
  {
    headerIcon: "fa fa-code",
    title: "Engineering Tutorials",
    body: "Developer tutorials and that I am personally intersted in. This includes JavaSript, Elixir, and React.",
  },
  {
    headerIcon: "fa fa-rss",
    title: "Engineering News",
    body: "News about new"
  },
  {
    headerIcon: "fa fa-book",
    title: "Miscellanious",
    body: "Endless ramblings about nothing"
  }
]

const Blog = () => (
  <Layout>
    <BlogBanner />
    <div className="container blog-card-container">
      {blogInfo.map(blogObject => (
        <BlogCard {...blogObject} />
      ))}
    </div>
  </Layout>
)

export default Blog
