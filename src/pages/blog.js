import React from "react"
import { Layout, BlogBanner, BlogCard } from "../components"
import "./blogIndex.scss"

const blogInfo = [
  {
    headerIcon: "fa fa-code",
    title: "Engineering",
    body:
      "Developer tutorials and that I am personally intersted in. This includes JavaSript, Elixir, and React.",
    disabled: false
  },
  {
    headerIcon: "fa fa-briefcase",
    title: "Career",
    body: "Posts comming soon",
    disabled: true
  },
  {
    headerIcon: "fa fa-book",
    title: "Miscellanious",
    body: "Posts comming soon",
    disabled: true
  },
]

const Blog = () => (
  <Layout>
    <BlogBanner id='post-banner-description' bannerText="Look at all these blogs" />
    <div className="blog-info container" style={{display: 'block'}}>
      <div className="blog-card-container">
        {blogInfo.map(blogObject => (
          <BlogCard {...blogObject} path="blog/engineering" />
        ))}
      </div>

      <div className="blogs-description" style={{marginTop: '50px'}}> 
      </div>
    </div>
  </Layout>
)

export default Blog
