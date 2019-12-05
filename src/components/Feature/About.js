import React from 'react'
import { Link } from 'react-router-dom'

const About = (props) => {
  return (
    <div className="container-fluid" style={{ margin: '1rem' }}>
      <div className="row">
        <div className="about-one shadow rounded col-sm" style={{ border: '1px #868e96 solid', height: '50vh', padding: '1rem', margin: '.5rem' }}>
          <h3 style={{ padding: '.5rem' }}>Meet Deckard:<br/>  your new study guide!</h3>
          <p>+ Browse existing decks, or add new study subjects and flashcards</p>
          <Link to="/decks"><button className="btn btn-dark" style={{ float: 'right', margin: '1rem' }}>See All Study Decks</button></Link>
        </div>
        <div className="about-two shadow rounded col-sm" style={{ border: '1px #868e96 solid', height: '50vh', padding: '1rem', margin: '.5rem' }}>
          <h3 style={{ color: '#dc3545', padding: '.5rem' }}>Create an account to save your study decks</h3>
          <p style={{ color: '#dc3545' }}>+ Keep your cards for your next study session, or delete them </p>
          <Link to="/sign-up"><button className="btn btn-danger" style={{ float: 'right', margin: '1rem' }}>Create Account</button></Link>
        </div>
        <div className="about-three shadow rounded col-sm" style={{ border: '1px #868e96 solid', height: '50vh', padding: '1rem', margin: '.5rem' }}>
          <h3 style={{ padding: '.5rem' }}>Time Your Progress</h3>
          <p>+ Set the timer, and see how many cards you can get through before time is up!</p>
          <div><Link to="/sign-in"><button className="btn btn-secondary" style={{ float: 'right', margin: '1rem' }}>Sign In</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
