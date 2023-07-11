import React, { useState } from "react"

const Counter = () => {
  const [state, setState] = useState<number>(0)

  return (
    <div>
      <p>{state}</p>
      <button onClick={() => setState(state + 1)}>Increment counter</button>
    </div>
  )
}

export default Counter
