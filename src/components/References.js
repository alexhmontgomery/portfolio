import React, { Component } from 'react'

export default class References extends Component {
  render () {
    return (
      <div>
        <div className='card card-inverse card-danger text-center'>
          <div className='card-block'>
            <h4 className='card-title'>Everybody loves Matthew McConaughey...</h4>
          </div>
        </div>
        <div className='card-deck'>
          <div className='card'>
            <img id='kate' className='card-img-top' src='https://images-na.ssl-images-amazon.com/images/G/01/digital/video/hero/Movies/2003/B000VMWXRK_HowtoLoseaGuyin10Days_UXPA1._V142676557_RI_SX940_.jpg' alt='kate-hudson' />
            <div className='card-block'>
              <h4 className='card-title'>Kate Hudson said:</h4>
              <p className='card-text'>"He is probably the most talented and best smelling actor I have ever worked with."</p>
            </div>
            <div className='card-block'>
              <p>Fell in love with Matt during <em>How to Lose a Guy in 10 Days</em></p>
            </div>
            <div className='card-footer'>
              <small className='text-muted'>Email: katehudson@aol.com</small>
            </div>
          </div>
          <div className='card'>
            <img id='chris' className='card-img-top' src='http://cdn.collider.com/wp-content/uploads/interstellar-christopher-nolan-matthew-mcconaughey.jpg' alt='chris-nolan' />
            <div className='card-block'>
              <h4 className='card-title'>Christopher Nolan said:</h4>
              <p className='card-text'>"I wish I could make a movie with a cast of only Matthew McConaughey clones. Then, it would be the best movie ever...and the prettiest."</p>
            </div>
            <div className='card-block'>
              <p>Learned a lot from Matt while directing <em>Interstellar</em></p>
            </div>
            <div className='card-footer'>
              <small className='text-muted'>Email: bestdirector75@yahoo.com</small>
            </div>
          </div>
          <div className='card'>
            <img id='leo' className='card-img-top' src='http://cdn2-www.comingsoon.net/assets/uploads/1970/01/file_580254_wolf-of-wall-street-mcconaughey-oscar-06242013-141533.jpg' alt='leo-dicaprio' />
            <div className='card-block'>
              <h4 className='card-title'>Leonardo DiCaprio said:</h4>
              <p className='card-text'>"When I grow up some day, I can only hope to be half as good of an actor as my hero Matt."</p>
            </div>
            <div className='card-block'>
              <p>Was lucky to share the screen with Matt in <em>The Wolf of Wall Street</em></p>
            </div>
            <div className='card-footer'>
              <small className='text-muted'>Email: leo5769@savetheplanet.org</small>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
