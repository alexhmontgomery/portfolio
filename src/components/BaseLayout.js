import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class BaseLayout extends Component {
  render () {
    return (
      <div>
        <nav className='navbar navbar-toggleable-md navbar-inverse bg-inverse'>
          <button className='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <NavLink className='navbar-brand' to='#'>Matthew McConaughey</NavLink>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav'>
              <NavLink className='nav-item nav-link' exact to='/'>Home</NavLink>
              <NavLink className='nav-item nav-link' to='/about'>About</NavLink>
              <NavLink className='nav-item nav-link' to='/portfolio'>Portfolio</NavLink>
              <NavLink className='nav-item nav-link' to='/contact'>Contact</NavLink>
              <NavLink className='nav-item nav-link' to='/references'>References</NavLink>
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
