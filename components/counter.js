"use client";
import React, { useState } from "react"

const Counter = (props)  => {
  const [currentCount, setCurrentCount] = useState(0)
  const inc = props.inc ?? 1;
  const text = props.text ?? `+${inc}`;
  const color = props.color ?? "blue";

  const handleClick = () => {
    setCurrentCount(currentCount + inc > 10 ? 0 : currentCount + inc);
  }

  return (
    <div>
      <button onClick={handleClick} style={{
        backgroundColor: color
      }}>{text}</button>
      <div>{currentCount}</div>
    </div>
  )
}

export default Counter
