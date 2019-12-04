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
  const [showQuestion, setShowQuestion] = useState(true)
  const [showAnswer, setShowAnswer] = useState(false)
  // show question or answer -- need an array of them for every card and want
  // to be able to look it up based on the card
  // const [questionUp, setQuestionUp] = useState(new Set())
  // set an array with card 34: setQuestionUp([34])

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
  // console.table(deck.cards)
  // console.log(props)
  // console.log(user.id)

  const flipCard = (event) => {
    event.persist()
    const found = deck.cards.find(card => {
      console.log('event, card', event.target.id, card.id)
      return card.id === parseInt(event.target.id)
    })
    console.log(document.getElementById('ugh'))
    document.getElementById('ugh').innerHTML = found.answer
    console.log('found', found)
    // console.log('deck', deck.cards)
    // console.log('event target is', event.target.id)
    // event.showAnswer = 'magoo'
    setShowQuestion(!showQuestion)
    setShowAnswer(!showAnswer)
  }

  const cardsJsx = deck.cards.map(card => {
    if (!user) {
      return (
        <ListGroup.Item key={card.id}>
          { /* <p>{card.question}</p> */}
          {showQuestion && <div id={card.id} onClick={flipCard}>{card.question}</div>}
          {showAnswer && <div id={card.id} onClick={flipCard}>{card.answer}</div>}
          {/* <p>{card.answer}</p> */}
        </ListGroup.Item>
      )
    } else {
      return (
        <ListGroup.Item key={card.id}>
          {showQuestion && <div id={card.id} onClick={flipCard}>{card.question}</div>}
          {showAnswer && <div id={card.id} onClick={flipCard}>{card.answer}</div>}
          {/* <p>{card.id}</p> */}
          { /* <p onClick={() => setShowQuestion(!showQuestion)}></p> */ }
          {/* <p>{card.answer}</p> */}
          <p>
            {user.id === card.user_id && <Button variant={'danger'} id={card.id} onClick={handleDelete}>Delete Card</Button>}
            {user.id === card.user_id && <Button variant={'warning'} onClick={handleUpdate} name={card.id}>Edit Card</Button>}
          </p>
        </ListGroup.Item>
      )
    }
  })

  return (
    <div className="row">
      <div className="col-6 text-center" align="center">
        <Link to="/create-card">Create Card</Link>
        <h4>{deck.subject}</h4>
        <div>{cardsJsx}</div>
      </div>
      <div id="ugh" className="col-6">ugh</div>
    </div>
  )
}

export default withRouter(Deck)
