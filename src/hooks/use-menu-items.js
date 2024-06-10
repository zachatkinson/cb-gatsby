import {useStaticQuery, graphql} from "gatsby"
export const useMenuItems = () => {
    const menu = useStaticQuery(
        graphql`
            query MenuQuery {
                allWpMenuItem {
                    edges {
                        item: node {
                            label
                            path
                            menu {
                                node {
                                    slug
                                }
                            }
                        }
                    }
                }
            }
        `
    )
    return (menu.allWpMenuItem.edges)
}
