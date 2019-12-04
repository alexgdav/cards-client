import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const CardForm = ({ card, option, handleChange, handleSubmit, cancelPath }) => (
  <form onSubmit={handleSubmit} style={{ padding: '1rem', margin: '1rem' }}>
    <label htmlFor="deck_id">Subject</label>
    <select name="deck_id" onChange={handleChange} value={card.deck_id} style={{ width: '30rem', display: 'block', margin: '1rem', padding: '1rem' }}
    >
      <option>Select a Subject</option>
      {option}
    </select>
    <label htmlFor="question">Question</label>
    <textarea
      id="question"
      placeholder="flashcard question"
      value={card.question}
      name="question"
      required
      onChange={handleChange}
      style={{ width: '30rem', display: 'block', margin: '1rem', padding: '1rem' }}
    />

    <label htmlFor="answer">Answer</label>
    <textarea
      id="answer"
      placeholder="flashcard answer"
      value={card.answer}
      name="answer"
      required
      onChange={handleChange}
      style={{ width: '30rem', display: 'block', margin: '1rem', padding: '1rem' }}
    />

    <Button style={{ margin: '1rem' }} variant={'secondary'} type="submit">Submit</Button>
    <Link to={cancelPath}>
      <Button style={{ margin: '1rem' }} variant={'danger'} type="button">Cancel</Button>
    </Link>
  </form>
)

export default CardForm
