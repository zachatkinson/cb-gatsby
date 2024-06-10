/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const path = require(`path`)
const chunk = require (`lodash/chunk`)
exports.createPages = async ({ graphql, actions, reporter })=> {
  const { posts } = await graphql(`
    query WpPosts {
      allWpPost(sort: {date: DESC}) {
        edges {
          previous {
            id
          }
          post: node {
            id
            uri
          }
          next {
            id
          }
        }
      }
    }
 `)
}