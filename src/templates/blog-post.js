import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  // const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title="Home">
      <SEO
        title={post.frontmatter.title}
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
      </nav>
      <div>
        <h2>Links</h2>
        <a href="https://duh.netlify.com" style="margin-left: 15px;">
          Blog
        </a>
        <a href="https://arpecop.xyz" style="margin-left: 15px;">
          Вицове
        </a>
        <a
          href="https://freeteenpicsandmovies.netlify.app"
          style="margin-left: 15px;"
        >
          Free teen pics
        </a>
        <a href="https://rudixlab.com" style="margin-left: 15px;">
          DevOps Bulgaria
        </a>
        <a href="https://novinata.netlify.app/" style="margin-left: 15px;">
          Новини
        </a>
        <a href="https://news.rudixlab.com/" style="margin-left: 15px;">
          Новини 2
        </a>
        <a href="https://bigblog.netlify.app/" style="margin-left: 15px;">
          Big Blog
        </a>
        <a
          href="https://arpecop.gitlab.io/izteglisi/"
          style="margin-left: 15px;"
        >
          Izteglisi
        </a>
      </div>
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
