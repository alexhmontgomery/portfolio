import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component {
  render () {
    return (
      <div className='home'>
        <div className='card'>
          <img className='card-img-top' src='http://img.usmagazine.com/social/matthew-mcconaughe-2-d5bc6c01-24f4-4877-959b-1a8e6e5d0ac2.jpg' alt='texas-shirt' />

        </div>
        <div className='jumbotron'>
          <h1 className='display-3'>Alright, Alright, Alright</h1>
          <p className='lead'>You've know him since he stole the show in Dazed & Confused.</p>
          <hr className='my-4' />
          <p>Now, it's time to learn more about the best comedic and dramatic actor of our generation.</p>
          <p className='lead'>
            <Link className='btn btn-primary btn-lg' to='/about' role='button'>About</Link>
          </p>
        </div>
      </div>

    )
  }
}
