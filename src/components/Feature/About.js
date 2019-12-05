import React from 'react'
import { Link } from 'react-router-dom'

const About = (props) => {
  return (
    <div className="container-fluid" style={{ margin: '2rem' }}>
      <div className="row">
        <div className="about-one shadow rounded col-sm" style={{ border: '1px #868e96 solid', height: '50vh', padding: '1rem', margin: '.5rem' }}>
          <h3 style={{ padding: '1rem' }}>Meet Deckard:<br/>  your new study guide!</h3>
          <Link to="/decks"><button className="btn btn-dark" style={{ float: 'right', margin: '1rem' }}>See All Study Decks</button></Link>
        </div>
        <div className="about-two shadow rounded col-sm" style={{ color: '#dc3545', border: '1px #868e96 solid', height: '50vh', padding: '1rem', margin: '.5rem' }}>
          <h3 style={{ padding: '1rem' }}>Create an account to save your study decks</h3>
          <Link to="/sign-up"><button className="btn btn-danger" style={{ float: 'right', margin: '1rem' }}>Create Account</button></Link>
        </div>
        <div className="about-three shadow rounded col-sm" style={{ border: '1px #868e96 solid', height: '50vh', padding: '1.5rem', margin: '.5rem' }}>
          <h5>Browse our preset decks, and add new study subjects and flashcards</h5>
          <h5>Keep your cards for your next study session, or delete them </h5>
          <h5>Set the timer, and see how many cards you can get through before time is up!</h5>
        </div>
      </div>
    </div>
  )
}

export default About
