import React from "react"
import { Link, graphql, PageProps } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import logo from '../images/logo.png';

type DataProps = {
  site: {
    siteMetadata: {
      author: string,
      title: string,
      description: string
    }
  }
}
const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div >
    <h3>GraphQL data</h3>
    <pre className="container">{JSON.stringify(data,null,4)}</pre>
    <h1>Hi people Iam {data.site.siteMetadata.author.replace('@','')}</h1>
   
    <p>Welcome to  {data.site.siteMetadata.title}</p>
    <p className="justify">Description : {data.site.siteMetadata.description} </p>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </div>
   
  </Layout>
)

export default IndexPage
export const query = graphql`
  {
    site {
      siteMetadata {
        author
        title
        description
      }
    }
  }
`