import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import ListGroup from 'react-bootstrap/ListGroup'
import messages from '../AutoDismissAlert/messages'
import Button from 'react-bootstrap/Button'
import apiUrl from '../../apiConfig'

const Deck = props => {
  const [deck, setDeck] = useState(null)
  const { alert, history, user } = props
  console.log('user', user)

  useEffect(() => {
    axios(`${apiUrl}/decks/${props.match.params.id}`)
      .then(res => {
        setDeck(res.data.deck)
      })
  }, [])

  const handleDelete = (event) => {
    console.log(event.target.id)
    axios({
      url: `${apiUrl}/cards/${event.target.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(() => {
        alert({ heading: 'Success', message: messages.deleteCardSuccess, variant: 'warning' })
        console.log(props.match.params.id)
        history.push('/')
        history.push(`/decks/${props.match.params.id}`)
      })
      .catch(() => {
        alert({ heading: 'Failure', message: messages.deleteCardFailure, variant: 'danger' })
      })
  }

  const handleUpdate = () => {
    console.log('updated!')
  }

  if (!deck) {
    return <p>Loading Decks</p>
  }
  // console.table(deck.cards)
  console.log(props)
  // const userId = user.id
  // console.log('userId is', userId)

  const cardsJsx = deck.cards.map(card => {
    if (!user) {
      return (
        <ListGroup.Item key={card.id}>
          <p>{card.id}</p>
          <p>{card.question}</p>
          <p>{card.answer}</p>
        </ListGroup.Item>
      )
    } else {
      return (
        <ListGroup.Item key={card.id}>
          <p>{card.id}</p>
          <p>{card.question}</p>
          <p>{card.answer}</p>
          <p>
            {user.id === card.user_id && <Button variant={'danger'} id={card.id} onClick={handleDelete}>Delete Card</Button>}
            {user.id === card.user_id && <Button variant={'warning'} onClick={handleUpdate}> Edit Card</Button>}
          </p>
        </ListGroup.Item>
      )
    }
  })

  return (
    <div>
      <h4>{deck.subject}</h4>
      <div>{cardsJsx}</div>
    </div>
  )
}

export default withRouter(Deck)
