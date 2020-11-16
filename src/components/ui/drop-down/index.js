import React, { useState, useEffect, useRef } from "react"
import styles from "./styles.scss"

import { Icon } from "../index"

export function DropDown({
  label,
  items,
  defaultValue,
  className,
  onClick,
  category,
}) {
  const [choicesOpen, setChoicesOpen] = useState(false)
  const [choice, setChoice] = useState()
  const _DropDownContainer = useRef()

  const dropDownAction = (arg1, agr2) => {
    onClick(arg1, agr2)
  }

  useEffect(() => {
    if (choicesOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [choicesOpen])

  const handleClickOutside = (e) => {
    if (
      _DropDownContainer.current &&
      !_DropDownContainer.current.contains(e.target)
    ) {
      setChoicesOpen(false)
    }
  }

  return (
    <div
      className={`Drop-down-container ${className ? className : ""} ${
        choicesOpen ? "Open" : ""
      }`}
      ref={_DropDownContainer}>
      <div
        className={"Drop-down-label-choice"}
        onClick={() => setChoicesOpen(!choicesOpen)}>
        {label || choice || defaultValue}
        <Icon className={"Chevron-down"} />
      </div>
      <div className={"Drop-down-choices"}>
        {items &&
          items.map((item, key) => {
            return (
              <div
                className="Drop-down-choice"
                onClick={() => {
                  item.type === "select" && dropDownAction(category, item.value)
                  setChoicesOpen(false)
                }}
                key={key + 3}>
                {item.label}
              </div>
            )
          })}
      </div>
    </div>
  )
}
