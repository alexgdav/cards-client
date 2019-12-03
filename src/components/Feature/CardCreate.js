import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import ListGroup from 'react-bootstrap/ListGroup'
import apiUrl from '../../apiConfig'
import CardForm from './CardForm'
import messages from '../AutoDismissAlert/messages'

const CardCreate = props => {
  const [card, setCard] = useState({ question: '', answer: '', deck_id: '' })
  const [decks, setDecks] = useState([])
  const { alert, history } = props
  // console.log('props', props)

  useEffect(() => {
    axios(`${apiUrl}/decks`)
      .then(res => {
        console.log(res.data.decks)
        setDecks(res.data.decks)
      })
      // .then(res => (console.log('decks are', res.data.decks)))
      .catch(console.error)
  }, [])
  const deckList = decks.map(deck => {
    return (
      <ListGroup.Item key={deck.id}>
        Deck ID: {deck.id} Deck Subject: {deck.subject}
      </ListGroup.Item>
    )
  })

  const handleChange = event => {
    event.persist()
    setCard({ ...card, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/cards`,
      method: 'POST',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      },
      data: { card }
    })
      .then(response => {
        setCard({ question: '', answer: '', deck_id: '' })
        alert({
          heading: 'Card Created Successfully',
          message: messages.createCardSuccess,
          variant: 'success' })
        history.push('/decks')
      })

      .catch(() => {
        setCard({ question: '', answer: '', deck_id: '' })
        alert({
          heading: 'Card Create Failed',
          message: messages.createCardFailure,
          variant: 'danger'
        })
      })
  }
  return (
    <div>
      <CardForm
        card={card}
        decks={decks}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={'/decks'}
      />
      <div>
        <h5>Available Deck IDs and Subjects</h5>
        {deckList}
      </div>
    </div>
  )
}

export default withRouter(CardCreate)
