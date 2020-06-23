import React from "react"
import logo from '../../images/logo.png'
const Header = ({ siteTitle }) => (
  <header className="row " style={{
    boxShadow: '1px 1px 2px rgba(0,0,0,0.1)'
  }}>
    <div className="col-6">
      <img src={logo} className="col-2 col-2-sm" alt="logo" ></img>
      <h2>{siteTitle}</h2>
    </div>
    <nav className="col-6 col-6-sm" style={{
     verticalAlign : 'middle'
    }}>
      <ul style={{ marginLeft: 'auto' }}>
        <li className="col-2 col-4-sm">Link 1</li>
        <li className="col-2 col-4-sm">Link 2</li>
        <li className="col-2 col-4-sm">Link 3</li>
      </ul>
    </nav>
  </header>
)



export default Header
