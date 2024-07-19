 // src/Banner.js

import React, { useEffect, useState } from 'react';
import './Banner.css';
import { ReactComponent as AlarmIcon } from './stopwatch-solid.svg';

const Banner = () => {
  const initialTime = 3600; // 1 hour in seconds
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => (prevTime > 0 ? prevTime - 1 : initialTime));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
  };

  return (
    <div className="banner">

      <div className="section">
      <AlarmIcon width="27" height="27" />
        <p>LIMITED TIME OFFER</p>
      </div>

      <div className="section">
        <p>Ends in: <span className="countdown">{formatTime(time)}</span></p>
      </div>

      <div className="section">
        <p><b>GET 10% OFF &nbsp;</b> Use Code:<b> EXAMSTART</b></p>
      </div>

    </div>
  );
};

export default Banner;
