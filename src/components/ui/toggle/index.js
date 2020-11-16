import React from "react"
import styles from "./styles.scss"

export function Toggle({ label, value, setValue }) {
  return (
    <div className="Toggle-container">
      <p className="Toggle-label">{`${label}`}</p>
      <div
        className={`Toggle-outer ${value ? "On" : ""}`}
        onClick={(e) => setValue(e)}>
        <div className="Toggle-switch"></div>
      </div>
    </div>
  )
}
