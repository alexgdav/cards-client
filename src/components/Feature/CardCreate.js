import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import CardForm from './CardForm'
import messages from '../AutoDismissAlert/messages'
import NoneShallPass from '../Nope/Nope'

const CardCreate = props => {
  const [card, setCard] = useState({ question: '', answer: '', deck_id: '' })
  const [decks, setDecks] = useState([])
  const { user, alert, history } = props

  useEffect(() => {
    axios(`${apiUrl}/decks`)
      .then(res => {
        setDecks(res.data.decks)
      })
      .catch(() => {
        alert({
          heading: 'Failure',
          message: messages.loadedDecksFailureCardFailure,
          variant: 'danger'
        })
      })
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
      url: `${apiUrl}/cards`,
      method: 'POST',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      },
      data: { card }
    })
      .then(response => {
        // reset card to clear form
        setCard({ question: '', answer: '', deck_id: '' })
        alert({
          heading: 'Card Created Successfully',
          message: messages.createCardSuccess,
          variant: 'success' })
        history.push(`/decks/${card.deck_id}`)
      })

      .catch(() => {
        // reset card to clear form
        setCard({ question: '', answer: '', deck_id: '' })
        alert({
          heading: 'Card Create Failed',
          message: messages.createCardFailure,
          variant: 'danger'
        })
      })
  }
  if (!user) {
    return <NoneShallPass/>
  }

  return (
    <div>
      <CardForm
        card={card}
        option={deckIds}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={'/decks'}
      />
    </div>
  )
}

export default withRouter(CardCreate)
