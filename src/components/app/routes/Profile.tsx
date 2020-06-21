import React, { ReactElement } from 'react'
import {Link} from 'gatsby'
interface Props {
    path : string
}

export default function Profile({}: Props): ReactElement {
    return (
        <div>
            Profile Page
            <Link to="/app/home">Go back to home page</Link>
        </div>
    )
}
