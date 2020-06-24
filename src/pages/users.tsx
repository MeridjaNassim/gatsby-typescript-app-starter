import React from "react"
import { Link , graphql, PageProps } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

interface DataProps {
  allUsersJson : {
    nodes : [
      {
        _id : string ,
        username : string , 
        displayName : string
      }
    ]
  }
}

const UsersPage : React.FC<PageProps<DataProps>>= ({data}) =>{ 
  
  const {nodes : users} =data.allUsersJson
  return (

  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <p>Here is the queried data </p>
    <pre className="container">{JSON.stringify(users,null,4)}</pre>
    <p>Rendering users : </p>

    <ul className="container">
    {
      users.map(user => {
        return (
          <li><div className="container">
              <h3>User id : {user._id}</h3>
              <h4>Username : {user.username}</h4>
        <p>Display Name : {user.displayName}</p>
            </div>
            </li>
        )
      })
    }
    </ul>
   
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)}

export default UsersPage
export const query = graphql`
{
  allUsersJson {
    nodes {
      _id
      displayName
      username
    }
  }
}
`