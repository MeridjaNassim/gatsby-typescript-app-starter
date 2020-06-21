import React, { ReactElement } from 'react'

interface Props {
    path : string
}

export default function Home({}: Props): ReactElement {
    return (
        <div>
            Home Page
        </div>
    )
}
