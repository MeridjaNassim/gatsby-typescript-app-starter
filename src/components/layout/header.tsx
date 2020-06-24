import React from "react"
import Logo from './Logo'
import { Link } from "gatsby"
const Header = ({ siteTitle }) => (
  <header className="" style={{
    display : 'flex',
    flexWrap :'wrap',
    alignItems : 'center',
    boxShadow: '1px 1px 2px rgba(0,0,0,0.1)'
  }}>
    <div className="row col-6 col-12-sm" style={{
      display : 'flex',
      alignItems : 'center'
    }}>
      <Logo className="col-2 col-2-sm" style={{
        borderRadius : '15%'
      }}alt="logo" ></Logo>
      <h2 className="col-10">{siteTitle}</h2>
    </div>
    <nav className=" row col-6 col-12-sm" style={{
     verticalAlign : 'middle'
    }}>
      <ul style={{ marginLeft: 'auto' }}>
         <li className="col-3 col-3-sm"><Link to="/">home</Link></li>
        <li className="col-3 col-3-sm"><Link to="/users">users</Link></li>
        <li className="col-3 col-3-sm"><Link to="/using-typescript">TypeScript</Link></li>
        <li className="col-3 col-3-sm"><Link to="/app/home">App</Link></li>
      </ul>
    </nav>
  </header>
)



export default Header
