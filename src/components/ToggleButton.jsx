import { useState } from "react"
import "./ToggleButton.css"

export default function ToggleButton() {
  // Step 1: create state
  const [isVisible, setIsVisible] = useState(true)

  // Step 2: function to toggle state
  const handleToggle = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div className="toggle-wrapper">
      {/* Step 3: button toggles state */}
      <button className="toggle-btn" onClick={handleToggle}>
        Click me!
      </button>

      {/* Step 4: conditional rendering */}
      {isVisible ? (
        <p className="content-visible">Content is VISIBLE</p>
      ) : (
        <p className="content-hidden">Content is HIDDEN</p>
      )}
    </div>
  )
}
