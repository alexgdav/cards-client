import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import CardForm from './CardForm'
import messages from '../AutoDismissAlert/messages'

const CardCreate = props => {
  const [card, setCard] = useState({ question: '', answer: '', deck_id: '' })
  const { alert } = props
  console.log('props', props)

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
      //  history.push(something goes here)
      })

      .catch(() => alert({
        heading: 'Card Create Failed',
        message: messages.createCardFailure,
        variant: 'danger'
      }))
  }

  return (
    <CardForm
      card={card}
      //  deck={card.deck_id}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      cancelPath={'/'}
    />
  )
}

export default withRouter(CardCreate)
