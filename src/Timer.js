import React, { useEffect, useState } from "react";

const calculateTimeLeft = (targetDate = "9/23/", time = "12:00:00") => {
  let year = new Date().getFullYear();
  let difference = +new Date(`${targetDate}, ${year} ${time}`) - +new Date();
  let timeLeft = {};
  if (difference > 0) {
    timeLeft = {
      weeks: Math.floor(difference / (1000 * 60 * 60 * 24 * 7)),
      days: Math.floor(difference / (1000 * 60 * 60 * 24) % 7),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  // ms => s => min => h => d => w

  return (timeLeft);
};

export default function Timer(props) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(props.date, props.time));

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(props.date , props.time));
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

// timeLeft === {days: 42, hours: 23, minutes: 44, seconds: 9}
// Object.keys === ['days', 'hours', 'minutes', 'seconds']
  
  Object.keys(timeLeft).forEach((interval) => {
    // if values are 0, don't display
    // if (!timeLeft[interval]) { return; }

    timerComponents.push(
      <span key={interval} className={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <li className="timerList__timerItem">
      <h2 className="timerItem__title">{props.title}</h2>
      {timerComponents.length ? timerComponents : <span className="">Time's up!</span>}
      <p className="timerItem__target">{`Target Date: ${props.date}${new Date().getFullYear()}`} </p>
    </li>
  );
}

