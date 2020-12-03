import React, { useState, useEffect, useCallback, useContext } from "react"
import { withRouter } from "react-router-dom"

import { Icon } from "../components/ui"

import NavPanel from "../components/NavPanel"

import ToastMessageContext from "../contexts/toast-message-provider"
import { GlobalStateContext } from "../contexts/global-context-provider"

function Layout({ children }) {
  const [toastMessages, setToastMessages] = useState([])
  const state = useContext(GlobalStateContext)

  useEffect(() => {
    if (toastMessages.length > 0) {
      const timer = setTimeout(
        () => setToastMessages((toastMessages) => toastMessages.slice(1)),
        3500
      )
      return () => {
        clearTimeout(timer)
      }
    }
  }, [toastMessages])

  const addToastMessage = useCallback(
    function (toast) {
      setToastMessages((toastMessages) => [...toastMessages, toast])
    },
    [setToastMessages]
  )

  const toastMessage = ({ iconClass, status, message }, key) => {
    return (
      <div
        className={`Toast-message ${status}`}
        id={`"Toast-Message-${key}"`}
        key={key + 2}>
        <p
          className="Toast-message-inner-content"
          id={`"Toast-Message-Inner-Content-${key}"`}>
          <Icon className={iconClass} size={"1.5rem"} />
          {message}
        </p>
        <div
          className="Toast-message-close-button"
          onClick={() => closeToast(key)}>
          <Icon className={"X-mark"} size={"1.1rem"} />
        </div>
      </div>
    )
  }

  const closeToast = (key) => {
    document.getElementById(`"Toast-Message-${key}"`).classList.add("Closed")
    setTimeout(() => {
      document.getElementById(`"Toast-Message-${key}"`).style.display = "none"
      toastMessages.length === 1 && setToastMessages([])
    }, 100)
  }

  return (
    <ToastMessageContext.Provider value={addToastMessage}>
      <NavPanel />
      {children}
      {toastMessages && toastMessages.length > 0 && (
        <div
          className={`Toast-message-container ${
            state.navPanelOpen ? "Open" : ""
          }`}>
          {toastMessages.map((config, key) => {
            return toastMessage(config, key)
          })}
        </div>
      )}
    </ToastMessageContext.Provider>
  )
}

export default withRouter(Layout)
