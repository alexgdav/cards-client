import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const CardForm = ({ card, option, handleChange, handleSubmit, cancelPath }) => (
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

    <select name="deck_id" onChange={handleChange} value={card.deck_id}
    >
      <option>Select a Subject</option>
      {option}
    </select>

    <Button variant={'info'} type="submit">Submit</Button>
    <Link to={cancelPath}>
      <Button variant={'danger'} type="button">Cancel</Button>
    </Link>
  </form>
)

export default CardForm
