import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import "../../css/@wordpress/block-library/build-style/style.css"
import "../../css/@wordpress/block-library/build-style/theme.css"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const PageTemplate = ({ data: { page } }) => {
    const featuredImage = {
        data: page.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
        alt: page.featuredImage?.node?.alt || ``,
    }

    return (
        <Layout isHomePage={page.uri === "/"}>
            <Seo title={page.title} description={""} />

            <article
                className="page"
                itemScope
                itemType="http://schema.org/Article"
            >
                <header>
                    <h1 itemProp="headline" className={"headline"}>{parse(page.title)}</h1>

                    {/* if we have a featured image for this post let's display it */}
                    {featuredImage?.data && (
                        <GatsbyImage
                            image={featuredImage.data}
                            alt={featuredImage.alt}
                            style={{ marginBottom: 50 }}
                        />
                    )}
                </header>

                {!!page.content && (
                    <section itemProp="articleBody">{parse(page.content)}</section>
                )}



            </article>
        </Layout>
    )
}

export default PageTemplate

export const pageQuery = graphql`
    query PageById(
        $id: String!
    ) {
        page: wpPage(id: { eq: $id }) {
            id
            content
            title
            uri
            date(formatString: "MMMM DD, YYYY")
            featuredImage {
                node {
                    altText
                    localFile {
                        childImageSharp {
                            gatsbyImageData(
                                quality: 100
                                placeholder: TRACED_SVG
                                layout: FULL_WIDTH
                            )
                        }
                    }
                }
            }
        }
    }
`
