import React, { createContext } from "react"

const ToastMessageContext = createContext()

export default ToastMessageContext

export function ToastMessageProvider({ children }) {
  return <>{children}</>
}
