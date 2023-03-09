import React, { useState, useEffect } from 'react';
import './Countdown.css'

function Countdown() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const countdownDate = new Date('2023-04-17T00:00:00Z').getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = new Date(distance).toLocaleString('en-US', {hour: 'numeric', hour12: false, minimumIntegerDigits: 2});
      const minutes = new Date(distance).toLocaleString('en-US', {minute: 'numeric', minimumIntegerDigits: 2});
      const seconds = new Date(distance).toLocaleString('en-US', {second: 'numeric', minimumIntegerDigits: 2});

      setCountdown({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='countdown'>
       <div className='container2'> 
         <p className='container3'>{countdown.days}</p> <p className='container4'>days</p>
       </div>
       <div className='container2'> 
         <p className='container3'>{countdown.hours}</p> <p className='container4'>hours</p>
       </div>
       <div className='container2'> 
         <p className='container3'>{countdown.minutes}</p> <p className='container4'>minutes</p>
       </div>
       <div className='container2'> 
         <p className='container3'>{countdown.seconds}</p> <p className='container4'>seconds</p>
       </div>
    </div>
  );
}

export default Countdown;