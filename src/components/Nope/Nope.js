import React from 'react'
import { Link } from 'react-router-dom'

const NoneShallPass = props => {
  return (
    <div className="card shadow" style={{ width: '33rem', align: 'center', padding: '1rem', margin: '5rem auto' }}>
      <div className="card-body"><div className="card-text"><p>You need to be signed in to perform this action. </p> <p>Sign in or sign up, and try again!</p>
        <Link to="/sign-up"><button className="btn btn-danger" style={{ margin: '1rem' }}>Create Account</button></Link>
        <Link to="/sign-in"><button className="btn btn-secondary" style={{ margin: '1rem' }}>Sign In</button></Link></div></div>
    </div>
  )
}

export default NoneShallPass
