import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import DeckForm from './DeckForm'
import messages from '../AutoDismissAlert/messages'
import NoneShallPass from '../Nope/Nope'

const DeckCreate = props => {
  const [deck, setDeck] = useState({ subject: '' })
  const { user, alert, history } = props

  const handleChange = event => {
    event.persist()
    setDeck({ ...deck, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/decks`,
      method: 'POST',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      },
      // just pass in deck because it was created with setDeck
      data: { deck }
    })
    // only passing it this because no longer need to pass it an object
      .then(res => {
        alert({
          heading: 'New Subject Added!',
          message: messages.createDeckSuccess,
          variant: 'success' })
        history.push('/decks')
      })

      .catch(() => alert({
        heading: 'Deck Create Failed',
        message: messages.createDeckFailure,
        variant: 'danger'
      }))
  }
  if (!user) {
    return <NoneShallPass/>
  }
  return (
    <DeckForm
      deck={deck}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      cancelPath={'/decks'}
    />
  )
}

export default withRouter(DeckCreate)
