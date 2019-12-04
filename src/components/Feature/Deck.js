import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import ListGroup from 'react-bootstrap/ListGroup'
import messages from '../AutoDismissAlert/messages'
import Button from 'react-bootstrap/Button'
import apiUrl from '../../apiConfig'

const Deck = props => {
  const [deck, setDeck] = useState(null)
  const { alert, history, user } = props

  useEffect(() => {
    axios(`${apiUrl}/decks/${props.match.params.id}`)
      .then(res => {
        setDeck(res.data.deck)
        alert({ heading: 'Success!', message: messages.loadOneDeckSuccess, variant: 'warning' })
      })
      .catch(() => {
        alert({ heading: 'Failure', message: messages.loadOneDeckFailure, variant: 'danger' })
      })
  }, [])

  const handleDelete = (event) => {
    axios({
      url: `${apiUrl}/cards/${event.target.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(() => {
        alert({ heading: 'Success', message: messages.deleteCardSuccess, variant: 'warning' })
        history.push('/')
        history.push(`/decks/${props.match.params.id}`)
      })
      .catch(() => {
        alert({ heading: 'Failure', message: messages.deleteCardFailure, variant: 'danger' })
      })
  }

  const handleUpdate = (event) => {
    history.push(`/cards/${event.target.name}/edit`)
  }

  if (!deck) {
    return <p>Loading Decks</p>
  }

  const cardToDiv = (event) => {
    event.persist()
    const found = deck.cards.find(card => {
      return card.id === parseInt(event.target.id)
    })
    document.getElementById('cardDiv').innerHTML = found.question
    document.getElementById('cardDiv').title = event.target.id
  }

  const flipCard = (event) => {
    if (document.getElementById('cardDiv').innerHTML !== ('')) {
      const cardId = event.target.title
      // console.log(cardId)
      const flipMe = deck.cards.find(card => {
        console.log('event, card', event.target.id, card.id)
        return card.id === parseInt(cardId)
      })
      // console.log(flipMe.answer)
      if (document.getElementById('cardDiv').innerHTML !== flipMe.question) {
        document.getElementById('cardDiv').innerHTML = flipMe.question
      } else {
        document.getElementById('cardDiv').innerHTML = flipMe.answer
      }
    }
  }
  const cardsJsx = deck.cards.map(card => {
    if (!user) {
      return (
        <ListGroup.Item key={card.id}>
          {<div id={card.id} onClick={cardToDiv}>{card.question}</div>}
        </ListGroup.Item>
      )
    } else {
      return (
        <ListGroup.Item key={card.id}>
          {<div id={card.id} onClick={cardToDiv}>{card.question}</div>}
          <p>
            {user.id === card.user_id && <Button variant={'danger'} id={card.id} onClick={handleDelete}>Delete Card</Button>}
            {user.id === card.user_id && <Button variant={'warning'} onClick={handleUpdate} name={card.id}>Edit Card</Button>}
          </p>
        </ListGroup.Item>
      )
    }
  })

  return (
    <div className="row study">
      <div className="card col-6 text-center" id="card-container">
        <div className="card-body text-center" id="cardDiv" onClick={flipCard}>
        </div>
      </div>
      <div className="col-6 text-center">
        <h4>{deck.subject}</h4>
        <div>{cardsJsx}</div>
        <Link to="/create-card"><button className="btn btn-secondary" style={{ margin: '1rem' }}>Create a New Card</button></Link>
      </div>
    </div>
  // <div id="cardDiv" onClick={flipCard}></div>
  )
}

export default withRouter(Deck)
