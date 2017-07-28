import React, { Component } from 'react'

export default class About extends Component {
  render () {
    return (
      <div className='card'>
        <img className='card-img-top' src='http://media.ellentv.com/2013/12/19/matthew-mcconaughey-episode-1-1200x630.jpg' alt='looking-straight' />
        <div clasName='card-block'>
          <h4 className='card-title'>About the man:</h4>
        </div>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><strong>Born:</strong>November 4, 1969 in Uvalde, Texas</li>
          <li className='list-group-item'><strong>Occupation:</strong>Actor</li>
          <li className='list-group-item'><strong>College:</strong>The University of Texas at Austin</li>
          <li className='list-group-item'><strong>Current Residence:</strong>Austin, Texas</li>
          <li className='list-group-item'><strong>Attributed Quotes:</strong>"The man who invented the hamburger was smart. The man who invented the cheeseburger was a genius."</li>
        </ul>

      </div>
    )
  }
}
