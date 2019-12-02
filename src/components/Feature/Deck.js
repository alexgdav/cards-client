import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import ListGroup from 'react-bootstrap/ListGroup'
import messages from '../AutoDismissAlert/messages'
import Button from 'react-bootstrap/Button'
import apiUrl from '../../apiConfig'

const Deck = props => {
  const [deck, setDeck] = useState(null)

  useEffect(() => {
    axios(`${apiUrl}/decks/${props.match.params.id}`)
      .then(res => {
        setDeck(res.data.deck)
      })
  }, [])

  const handleDelete = () => {
    axios({
      url: `${apiUrl}/cards/${props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      }
    })
      .then(() => {
        props.alert({ heading: 'Success', message: messages.deleteCardSuccess, variant: 'warning' })
        history.push('/decks')
      })
      .catch(() => {
        props.alert({ heading: 'Failure', message: messages.deleteCardFailure, variant: 'danger' })
      })
  }

  const handleUpdate = () => {
    console.log('updated!')
  }

  if (!deck) {
    return <p>Loading Decks</p>
  }
  console.table(deck.cards)
  const userId = deck.user.id
  console.log('userId is', userId)
  const cardsJsx = deck.cards.map(card => {
    return (
      <ListGroup.Item key={card.id}>
        <p>{card.question}</p>
        <p>{card.answer}</p>
        <p>
          {userId === card.user_id && <Button variant={'danger'} onClick={handleDelete}>Delete Card</Button>}
          {userId === card.user_id && <Button variant={'warning'} onClick={handleUpdate}> Edit Card</Button>}
        </p>
      </ListGroup.Item>
    )
  })

  return (
    <div>
      <h4>{deck.subject}</h4>
      <div>{cardsJsx}</div>
    </div>
  )
}

export default withRouter(Deck)
