import React, { useState, useEffect } from 'react'
import './collapsible.scss'

const Timer = () => {
  const [seconds, setSeconds] = useState('')
  const [isActive, setIsActive] = useState(false)

  const toggle = () => {
    setIsActive(!isActive)
  }
  const reset = () => {
    setSeconds('')
    setIsActive(false)
    document.getElementById('seconds-seconds').style.visibility = 'hidden'
  }
  const handleChange = event => {
    // event.persist()
    setSeconds(event.target.value)
  }

  const setTheTime = () => {
    document.getElementById('setter').value = ''
    document.getElementById('setter').placeholder = 'enter desired number of seconds and click \'set # seconds\''
    document.getElementById('seconds-seconds').style.visibility = 'visible'
  }

  useEffect(() => {
    if ((isActive && seconds < 1) || (!isActive && seconds === 0)) {
      reset()
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
    <div className="wrap-collapsible">
      {console.log(document.getElementById('setter'))}
      <input id="collapsible" className="toggle" type="checkbox"/>
      <label htmlFor="collapsible" className="toggle-label rounded">Open/Close Timer</label>
      <div className="collapsible-content">
        <div className="timer row shadow rounded" style={{ margin: 'auto ' }}>
          <div className="time-input col-sm-12">
            <h5 id="seconds-seconds" style={{ visibility: 'hidden', margin: '.5rem auto auto 1rem' }}>{seconds}</h5>
            <input id="setter" placeholder="enter desired number of seconds and click 'set # seconds'" onChange={handleChange} style={{ width: '27rem', height: '2rem', margin: '1rem' }}/>
            <button id="set" className="btn btn-secondary" onClick={setTheTime}>Set # Seconds</button>
            <button style={{ margin: '1rem' }} className={`btn btn-success btn-success-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
              { isActive ? 'Pause Timer' : 'Start Timer' }
            </button>
            <button className="btn btn-danger" onClick={reset}>
          Stop & Clear Timer
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timer
