import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'
// import Select from 'react-select'

const CardForm = ({ card, handleChange, handleSubmit, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor="question">Question</label>
    <textarea
      id="question"
      placeholder="flashcard question"
      value={card.question}
      name="question"
      required
      onChange={handleChange}
    />

    <label htmlFor="answer">Answer</label>
    <textarea
      id="answer"
      placeholder="flashcard answer"
      value={card.answer}
      name="answer"
      required
      onChange={handleChange}
    />

    <label htmlFor="deck_id">Deck Id</label>
    <input
      id="deck_id"
      placeholder="Deck ID"
      value={card.deck_id}
      name="deck_id"
      required
      onChange={handleChange}
    />

    <Button variant={'info'} type="submit">Submit</Button>
    <Link to={cancelPath}>
      <Button variant={'danger'} type="button">Cancel</Button>
    </Link>
  </form>
)

export default CardForm
