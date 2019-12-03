import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const CardForm = ({ card, decks, option, handleChange, handleSubmit, cancelPath }) => (
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

    { console.log('decks are', decks) }

    <select name="deck_id" onChange={(event) => handleChange(event)} value={card.deck_id}
    >
      <option>Select a Subject</option>
      {option}
    </select>

    { /* <select name="deck_id" onChange={(event) => handleChange(event)}
    >
      <option>Select a Subject</option>
      {
        decks.map((deck, index) => {
          return (
            <option key={deck.id} value={deck.id} selected={card.deck_id === deck.id} >
              {deck.subject}
            </option>
          )
        })
      }
    </select>
  */ }

    <Button variant={'info'} type="submit">Submit</Button>
    <Link to={cancelPath}>
      <Button variant={'danger'} type="button">Cancel</Button>
    </Link>
  </form>
)

export default CardForm
