import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const DeckForm = ({ deck, handleChange, handleSubmit, cancelPath }) => (
  <form onSubmit={handleSubmit} style={{ padding: '1rem', margin: '1rem' }}>
    <label htmlFor="subject">Deck Subject</label>
    <input
      id="subject"
      placeholder="enter new study subject here"
      value={deck.subject}
      name="subject"
      required
      onChange={handleChange}
      style={{ width: '30rem', display: 'block', margin: '1rem', padding: '1rem' }}
    />

    <Button style={{ margin: '1rem' }} variant={'secondary'} type="submit">Submit</Button>
    <Link to={cancelPath}>
      <Button variant={'danger'} type="button">Cancel</Button>
    </Link>
  </form>
)

export default DeckForm
