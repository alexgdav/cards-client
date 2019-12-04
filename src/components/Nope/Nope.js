import React from 'react'

const NoneShallPass = props => {
  return (
    <div className="card" style={{ width: '33rem', align: 'center', padding: '1rem', margin: '5rem auto' }}>
      <div className="card-body"><div className="card-text"><p>You need to be signed in to perform this action. </p> <p>Sign in or sign up, and try again!</p></div></div>
    </div>
  )
}

export default NoneShallPass
