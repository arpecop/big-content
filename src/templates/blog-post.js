import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  // const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title="Home">
      <SEO
        title={post.frontmatter.mitle}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <h1
            style={{
              marginBottom: 0,
            }}
          >
            {post.frontmatter.mitle}
          </h1>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.mitle}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.mitle} →
              </Link>
            )}
          </li>
        </ul>

        <h2>Links</h2>
        <a href="https://duh.netlify.com">Blog </a>
        <a href="https://arpecop.xyz">Вицове </a>
        <a href="https://freeteenpicsandmovies.netlify.app">Free teen pics</a>
        <a href="https://rudixlab.com">DevOps Bulgaria </a>
        <a href="https://novinata.netlify.app/">Новини </a>
        <a href="https://news.rudixlab.com/">Новини 2 </a>
        <a href="https://arpecop.gitlab.io/izteglisi/">Izteglisi </a>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        mitle
        description
      }
    }
  }
`
