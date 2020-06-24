import React, { ReactElement } from 'react'
import {Link , graphql, useStaticQuery} from 'gatsby'
interface Props {
    path : string
}



export default function Profile({}: Props): ReactElement {
    return (
        <div>
            Profile Page
            <Link to="/app/home">Go back to home page</Link>
            <pre className="container">{JSON.stringify(data,null,4)}</pre>
        </div>
    )
}
