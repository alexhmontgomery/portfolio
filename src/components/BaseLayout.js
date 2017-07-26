import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class BaseLayout extends Component {
  render () {
    return (
      <div>
        <nav className='navbar navbar-toggleable-md navbar-inverse bg-inverse'>
          <button className='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <Link className='navbar-brand' to='#'>Matthew McConaughey</Link>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav'>
              <Link className='nav-item nav-link' to='/'>Home</Link>
              <Link className='nav-item nav-link' to='/about'>About</Link>
              <Link className='nav-item nav-link' to='/portfolio'>Portfolio</Link>
            </div>
          </div>
        </nav>
        {this.props.children}
        <footer className='navbar navbar-inverse bg-inverse'>
          <span className='navbar-text'>&copy; 2017 | Just Keep Livin' Designs</span>
        </footer>
      </div>
    )
  }
}
