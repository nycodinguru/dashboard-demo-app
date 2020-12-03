import { useContext } from "react"
import ToastMessageContext from "../contexts/toast-message-provider"

export function useToastContext() {
  return useContext(ToastMessageContext)
}
