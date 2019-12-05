import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import messages from '../AutoDismissAlert/messages'
import Button from 'react-bootstrap/Button'

const Decks = props => {
  const [decks, setDecks] = useState([])

  useEffect(() => {
    axios(`${apiUrl}/decks`)
      .then(res => {
        setDecks(res.data.decks)
        // console.table(res.data.decks)
      })
      // .then(() => props.alert({
      //  heading: 'Success',
      //  message: messages.loadedDecksSuccess,
      //  variant: 'success'
      // }))
      .catch(() => props.alert({
        heading: 'Failure',
        message: messages.loadedDecksFailure,
        variant: 'danger'
      }))
  }, [])

  const handleDelete = (event) => {
    console.log(`${apiUrl}/decks/${event.target.id}`)
    axios({
      url: `${apiUrl}/decks/${event.target.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      }
    })
      .then(() => {
        props.alert({ heading: 'Success', message: messages.deleteDeckSuccess, variant: 'warning' })
      })
      .then(() => {
        axios(`${apiUrl}/decks`)
          .then(res => {
            setDecks(res.data.decks)
          })// console.table(res.data.decks)
      })
      .catch(() => {
        props.alert({ heading: 'Failure', message: messages.deleteDeckFailure, variant: 'danger' })
      })
  }

  const decksJsx = decks.map(deck => {
    if (props.user) {
      return (
        <ListGroup.Item key={deck.id}>
          <Link className="rounded" style={{ padding: '.5rem', margin: '.5rem', display: 'block' }} to={`#decks/${deck.id}`}>{deck.subject}</Link>
          <p>
            {props.user.id === deck.user.id && <Button variant={'danger'} id={deck.id} onClick={handleDelete}>Delete Deck</Button>}
          </p>
        </ListGroup.Item>
      )
    }
    return (
      <ListGroup.Item key={deck.id} as={'a'} href={`#decks/${deck.id}`}>
        {deck.subject}
      </ListGroup.Item>
    )
  })

  return (
    <div className="row">
      <div className="col-8 decks" style={{ padding: '1rem' }}>
        <span className="help">click on a subject to study it</span>
        <h1>Study Subjects</h1>
        <Link to="/create-deck"><button className="btn btn-secondary">Add A New Subject to Study</button></Link>
        <ListGroup className="list">
          {decksJsx}
        </ListGroup>
      </div>
    </div>
  )
}

export default Decks
