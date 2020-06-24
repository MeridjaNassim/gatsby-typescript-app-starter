import React from "react"
import { Link, graphql, PageProps } from "gatsby"
import Logo from '../components/layout/Logo'
import Layout from "../components/layout/layout"
import SEO from "../components/seo"


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
    <Logo className="col-2 col-3-sm" style={{
        borderRadius : '15%'
      }}></Logo>
    <div >
    <h3>GraphQL data</h3>
    <pre className="container">{JSON.stringify(data,null,4)}</pre>
    <h1>Hi people Iam {data.site.siteMetadata.author.replace('@','')}</h1>
   
    <p>Welcome to  {data.site.siteMetadata.title}</p>
    <p className="justify">Description : {data.site.siteMetadata.description} </p>
    <Link to="/users/">Go to users page</Link> <br />
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