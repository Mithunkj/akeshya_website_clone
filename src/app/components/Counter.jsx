import React, { useEffect, useState } from "react";
import style from "@/app/styles/style.module.css";

const Counter = ({ startCount, endCount, duration }) => {
  startCount = Number(startCount);
  endCount = Number(endCount);
  duration = Number(duration);

  const [count, setCount] = useState(startCount);

  useEffect(() => {
    const increment = Math.ceil((endCount - startCount) / (duration * 100)); // Calculate increment per millisecond
    const interval = setInterval(() => {
      if (count < endCount) {
        setCount((prevCount) => prevCount + increment);
      } else {
        setCount(endCount);
        clearInterval(interval);
      }
    }, 1); // Update counter every millisecond

    // Cleanup function
    return () => clearInterval(interval);
  }, [count, startCount, endCount, duration]);
  return <span class={style.purecounter}>{count}</span>;
};

export default Counter;
