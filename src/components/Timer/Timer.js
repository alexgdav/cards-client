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
    // document.getElementById('seconds-seconds').innerHTML = ''
  }
  const handleChange = event => {
    // event.persist()
    setSeconds(event.target.value)
  }

  const setTheTime = () => {
    document.getElementById('input').value = ''
    document.getElementById('input').placeholder = 'enter desired number of seconds and click \'set # seconds\''
    document.getElementById('seconds-seconds').style.visibility = 'visible'
  }

  // const resetTheTime = () => {
  //  document.getElementById('seconds-seconds').style.visibility = 'hidden'
  //  document.getElementById('seconds').style.visibility = 'visible'
  // }

  useEffect(() => {
    if ((isActive && seconds === 0) || (!isActive && seconds === 0)) {
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
      <input id="collapsible" className="toggle" type="checkbox"/>
      <label htmlFor="collapsible" className="lbl-toggle rounded">Open/Close Timer</label>
      <div className="collapsible-content">
        {/* <div className="content-inner"> */}
        <div className="timer row shadow rounded" style={{ margin: 'auto ' }}>
          <div className="time-input col-sm-12">
            { /* <h5 id="seconds">00:00 seconds</h5> */}
            <h5 id="seconds-seconds" style={{ visibility: 'hidden', margin: '.5rem auto auto 1rem' }}>:{seconds}s</h5>
            <input placeholder="enter desired number of seconds and click 'set # seconds'" id="input" name="timer-input" onChange={handleChange} style={{ width: '27rem', height: '2rem', margin: '1rem' }}/>
            <button className="btn btn-secondary" onClick={setTheTime}>Set # Seconds</button>
            <button style={{ margin: '1rem' }} className={`btn btn-success btn-success-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
              { isActive ? 'Pause Timer' : 'Start Timer' }
            </button>
            <button className="btn btn-danger" onClick={reset}>
          Stop & Clear Timer
            </button>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Timer
