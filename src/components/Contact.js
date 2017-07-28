import React, { Component } from 'react'

export default class Contact extends Component {
  render () {
    return (
      <div className='card-group'>
        <div className='card'>
          <img id='contact-pic' className='card-img-top' src='http://wallpaper.pickywallpapers.com/iphone4/matthew-mcconaughey-on-the-phone.jpg' alt='matt-phone' />
        </div>
        <div className='card'>
          <div className='card-block'>
            <div>
              <blockquote className='blockquote blockquote-reverse'>
                <p className='mb-0'>Let me tell you this, the older you do get the more rules they're gonna try to get you to follow. You just gotta keep livin' man, L-I-V-I-N.</p>
                <footer className='blockquote-footer'>Matthew McConaughey as Wooderson in <cite title='Source Title'>Dazed and Confused</cite></footer>
              </blockquote>
            </div>
            <h4 className='card-title'>Contact Mr. McConaughey</h4>
            <p className='card-text'><strong>Phone: </strong>1-800-TEXAS-4EVA</p>
            <p className='card-text'><strong>Email: </strong>alrightalrightalright@jkl.com</p>

          </div>

        </div>
      </div>
    )
  }
}
