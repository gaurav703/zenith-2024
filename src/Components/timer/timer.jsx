import React from 'react';
import { useState, useEffect } from 'react';
import "./timer.css";

const Timer = (props) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = props.date;

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  });

  return (
    <div className="timer">
        {/* <div className='timer-text'>
          <p>THE <span>FINAL</span> COUNTDOWN</p>
        </div> */}
        <div className='timer-inner'>
          <div className='timer-inner-contain'>
            <div className='timer-words'>
              <div><p>Days</p></div>
              <div><p>Hours</p></div>
              <div><p>Mins</p></div>
              <div><p>Secs</p></div>
            </div>
            <div className='timer-time'>
              <div><p>{days}</p></div>
              <div><p>{hours}</p></div>
              <div><p>{minutes}</p></div>
              <div><p>{seconds}</p></div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Timer;