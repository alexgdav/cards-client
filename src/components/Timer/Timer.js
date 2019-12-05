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
    document.getElementById('seconds-seconds').style.visibility = 'hidden'
    document.getElementById('seconds').style.visibility = 'visible'
  }
  const handleChange = event => {
    // event.persist()
    setSeconds(event.target.value)
  }

  const setTheTime = () => {
    document.getElementById('input').value = ''
    document.getElementById('seconds').style.visibility = 'hidden'
    document.getElementById('seconds-seconds').style.visibility = 'visible'
  }

  const resetTheTime = () => {
    document.getElementById('seconds-seconds').style.visibility = 'hidden'
    document.getElementById('seconds').style.visibility = 'visible'
  }

  useEffect(() => {
    if (isActive && seconds === 0) {
      resetTheTime()
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
        <input id="input" name="timer-input" onChange={handleChange} style={{ width: '10rem', height: '2rem', margin: '1rem' }}/>
        <button className="btn btn-secondary" onClick={setTheTime}>set timer</button>
        <h4 id="seconds">00:00 seconds</h4>
        <h4 id="seconds-seconds" style={{ visibility: 'hidden' }}>{seconds} seconds</h4>
      </div>
      <div className="row">
        <button style={{ margin: '1rem' }} className={`btn btn-success btn-success-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause Timer' : 'Start Timer'}
        </button>
        <button style={{ margin: '1rem' }} className="btn btn-warning" onClick={reset}>
          Stop & Reset Timer
        </button>
      </div>
    </div>
  )
}

export default Timer
