"use client";
import React, { useState } from "react"

const GitHub = () => {
  const [hidden, setHidden] = useState(true);
  const handleClick = () => {
    window.open("https://github.com/comradealek/hw8", "", "width=800, height=600, resizable=false", false);
    setHidden(!hidden);
  }

  return (
    <div>
      <p style={{textAlign: "justify"}}>
        This webzone's github page is <button onClick={handleClick}>here</button>.
        <br />
        <div hidden={hidden}> 
          If that didn't work, then<a href="https://github.com/comradealek/hw8"> click here.</a>
        </div>
        <br />
        My group's final project will be a weather app made with Vue. Vue is a JavaScript 
        framework that is designed to be as flexible as possible, where it can be used
        alongside other JavaScript projects and libraries as supporting software, or it can
        be used for the full stack of a web app.
      </p>
    </div>
  )
}

export default GitHub
