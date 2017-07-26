import React, { Component } from 'react'

export default class Portfolio extends Component {
  render () {
    return (
      <div>
        <div className='jumbotron jumbotron-fluid'>
          <div className='container'>
            <h1 className='display-3'>Portfolio</h1>
            <p className='lead'>These are some of the best movies that Mr. McConaughey has starred in.</p>
          </div>
        </div>
        <div className='card-group'>
          <div className='card'>
            <img className='card-img-top' src='https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwMTA4MzgyNF5BMl5BanBnXkFtZTgwMjEyMjE0MDE@._V1_UX182_CR0,0,182,268_AL_.jpg' alt='Card image cap' />
            <div className='card-block'>
              <h4 className='card-title'>Dallas Buyers Club</h4>
              <p className='card-text'>In 1985 Dallas, electrician and hustler Ron Woodroof works around the system to help AIDS patients get the medication they need after he is diagnosed with the disease.</p>
              {/* <p className='card-text'><small className='text-muted'>Last updated 3 mins ago</small></p> */}
            </div>
          </div>
          <div className='card'>
            <img className='card-img-top' src='https://images-na.ssl-images-amazon.com/images/M/MV5BMTU2MzcyODgyNV5BMl5BanBnXkFtZTcwNTc4MDYwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg' alt='Card image cap' />
            <div className='card-block'>
              <h4 className='card-title'>Mud</h4>
              <p className='card-text'>Two young boys encounter a fugitive and form a pact to help him evade the vigilantes that are on his trail and to reunite him with his true love.</p>
            </div>
          </div>
          <div className='card'>
            <img className='card-img-top' src='https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4NDE4NTY5MV5BMl5BanBnXkFtZTcwODQyMTkxNA@@._V1_UX182_CR0,0,182,268_AL_.jpg' alt='Card image cap' />
            <div className='card-block'>
              <h4 className='card-title'>The Lincoln Lawyer</h4>
              <p className='card-text'>Mick Haller is a defense lawyer who works out of his Lincoln. When a wealthy Realtor is accused of assaulting a prostitute, Haller is asked to defend him.</p>
            </div>
          </div>
          <div className='card'>
            <img className='card-img-top' src='https://images-na.ssl-images-amazon.com/images/M/MV5BYjBhNjc1NjktZTg4OS00YmUyLWI4YjAtNGIxZGM4ZTdkNmZkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg' alt='Card image cap' />
            <div className='card-block'>
              <h4 className='card-title'>EdTV</h4>
              <p className='card-text'>A video store clerk agrees to have his life filmed by a camera crew for a television show.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
