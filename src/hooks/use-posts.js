import {useStaticQuery, graphql} from "gatsby"
export const usePosts = () => {
    const posts = useStaticQuery(
        graphql`
            query PostsQuery {
                allWpPost {
                    edges {
                        previous {
                            id
                        }
                        next {
                            id
                        }
                        post: node {
                            id
                            uri
                        }
                    }
                }
            }
        `
    )
    return (posts.allWpPost.edges)
}
