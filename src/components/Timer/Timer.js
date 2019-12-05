import React, { useState, useEffect } from 'react'

const Timer = () => {
  const [seconds, setSeconds] = useState('')
  const [isActive, setIsActive] = useState(false)

  const toggle = () => {
    setIsActive(!isActive)
  }

  const reset = () => {
    setSeconds(60)
    setIsActive(false)
  }
  const handleChange = event => {
    // event.persist()
    setSeconds(event.target.value)
  }

  useEffect(() => {
    if (isActive && seconds === 0) {
      return toggle()
    } else {
      let interval
      if (isActive) {
        interval = setInterval(() => {
          setSeconds(seconds => seconds - 1)
        }, 1000)
      } else if (!isActive && seconds !== 60) {
        clearInterval(interval)
      }
      return () => clearInterval(interval)
    }
  }, [isActive, seconds])

  return (
    <div className="timer">
      <div className="time-input">
        <label htmlFor="timer-input">Set Timer:</label>
        <input name="timer-input" onChange={handleChange} style={{ width: '10rem', height: '2rem', margin: '1rem' }}/>
        <h4 id="seconds">00:{seconds}s</h4>
      </div>
      <div className="row">
        <button style={{ margin: '1rem' }} className={`btn btn-success btn-success-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Stop Timer' : 'Start Timer'}
        </button>
        <button style={{ margin: '1rem' }} className="btn btn-warning" onClick={reset}>
          Reset Timer
        </button>
      </div>
    </div>
  )
}

export default Timer
