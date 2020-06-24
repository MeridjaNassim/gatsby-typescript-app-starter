import Img from 'gatsby-image'

import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

interface Props {
   
}
const query = graphql`
query {
    placeholderImage: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Logo = (props: Props) => {
    const data = useStaticQuery(query)
    return (
        <Img {...props} fluid={data.placeholderImage.childImageSharp.fluid}/>
    )
}

export default Logo
