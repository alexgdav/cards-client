import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import messages from '../AutoDismissAlert/messages'

const Decks = props => {
  const [decks, setDecks] = useState([])

  // console.log('props is', props)

  useEffect(() => {
    axios(`${apiUrl}/decks`)
      .then(res => {
        setDecks(res.data.decks)
        // console.table(res.data.decks)
      })
      .then(() => props.alert({
        heading: 'Success',
        message: messages.loadedDecksSuccess,
        variant: 'success'
      }))
      .catch(() => props.alert({
        heading: 'Failure',
        message: messages.loadedDecksFailure,
        variant: 'danger'
      }))
  }, [])

  const decksJsx = decks.map(deck => {
    return (
      <ListGroup.Item key={deck.id} as={'a'} href={`#decks/${deck.id}`}>
        {deck.subject}
      </ListGroup.Item>
    )
  })

  return (
    <div>
      <h1>Study Subjects</h1>
      <Link to="/create-deck">Add A New Subject to Study</Link>
      <ListGroup>
        {decksJsx}
      </ListGroup>
    </div>
  )
}

export default Decks