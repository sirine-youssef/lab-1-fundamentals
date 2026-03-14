import { useState } from "react"
import "./Counter.css"

export default function Counter() {
  const [count, setCount] = useState(0) // initial value

  return (
    <div className="counter-card">
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}
