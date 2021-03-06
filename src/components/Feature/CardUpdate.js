import React, { useEffect, useState } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import CardForm from './CardForm'
import messages from '../AutoDismissAlert/messages'

const CardUpdate = props => {
  const [card, setCard] = useState({ question: '', answer: '', deck_id: '' })
  const [editedCard, setEditedCard] = useState(null)
  const [decks, setDecks] = useState([])
  const { alert } = props

  useEffect(() => {
    axios(`${apiUrl}/cards/${props.match.params.id}`)
      .then(res => setCard(res.data.card))
      .catch(() => {
        alert({
          heading: 'Card Edit Failed',
          message: messages.updateCardFailure,
          variant: 'danger'
        })
      })
  }, [])

  useEffect(() => {
    axios(`${apiUrl}/decks`)
      .then(res => {
        setDecks(res.data.decks)
      })
      .catch(() =>
        alert({
          heading: 'Failure',
          message: messages.loadedDecksFailure,
          variant: 'danger'
        }))
  }, [])

  const deckIds = decks.map(deck => {
    return (
      <option key={deck.id} value={deck.id}>
        {deck.subject}
      </option>
    )
  })

  const handleChange = event => {
    event.persist()
    setCard({ ...card, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/cards/${props.match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      },
      data: { card }
    })
      .then(response => {
        setEditedCard(true)
        // reset card to reset form
        // setCard({ question: '', answer: '', deck_id: '' })
        alert({
          heading: 'Card Edited Successfully',
          message: messages.updateCardSuccess,
          variant: 'success' })
      })
      .catch(() => {
        // reset card to reset form
        // setCard({ question: '', answer: '', deck_id: '' })
        alert({
          heading: 'Card Edit Failed',
          message: messages.updateCardFailure,
          variant: 'danger'
        })
      })
  }

  if (editedCard) {
    return <Redirect to={`/decks/${card.deck.id}`} />
  }
  return (
    <CardForm
      card={card}
      option={deckIds}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      cancelPath={'/decks'}
    />
  )
}

export default withRouter(CardUpdate)
