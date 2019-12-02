import React, { useEffect, useState } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import CardForm from './CardForm'
import messages from '../AutoDismissAlert/messages'

const CardUpdate = props => {
  const [card, setCard] = useState({ question: '', answer: '', deck_id: '' })
  const [editedCard, setEditedCard] = useState(null)
  const { alert } = props

  useEffect(() => {
    axios(`${apiUrl}/cards/${props.match.params.id}`)
      .then(res => setCard(res.data.card))
      .catch(console.error)
  }, [])

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
        alert({
          heading: 'Card Edited Successfully',
          message: messages.updateCardSuccess,
          variant: 'success' })
      })
      .catch(() => {
        alert({
          heading: 'Card Edit Failed',
          message: messages.updateCardFailure,
          variant: 'danger'
        })
      })
  }

  if (editedCard) {
    return <Redirect to={'/decks'} />
  }

  return (
    <CardForm
      card={card}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      cancelPath={'/decks'}
    />
  )
}

export default withRouter(CardUpdate)
