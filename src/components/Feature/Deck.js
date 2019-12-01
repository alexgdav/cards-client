import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import ListGroup from 'react-bootstrap/ListGroup'
// import messages from '../AutoDismissAlert/messages'
// import Button from 'react-bootstrap/Button'
import apiUrl from '../../apiConfig'

const Deck = props => {
  const [deck, setDeck] = useState(null)

  useEffect(() => {
    axios(`${apiUrl}/decks/${props.match.params.id}`)
      .then(res => {
        setDeck(res.data.deck)
        const userId = res.data.deck.cards
        console.log(userId)
      })
  }, [])

  /* const handleDelete = () => {
    axios({
      url: `${apiUrl}/books/${props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      }
    })
      .then(() => {
        props.alert({ heading: 'Success', message: messages.deleteBookSuccess, variant: 'warning' })
        history.push('/books')
      })
      .catch(() => {
        props.alert({ heading: 'Rut roh', message: messages.deleteBookFailure, variant: 'danger' })
      })
  }

  const handleUpdate = () => {
    console.log('updated!')
  } */

  if (!deck) {
    return <p>Loading Decks</p>
  }
  console.table(deck.cards)
  // console.log(userId)
  const cardsJsx = deck.cards.map(card => {
    return (
      <ListGroup.Item key={card.id}>
        <p>{card.question}</p>
        <p>{card.answer}</p>
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
