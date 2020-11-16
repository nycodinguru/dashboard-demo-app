import React from "react"
import styles from "./styles.scss"

export const Icon = React.forwardRef(
  ({ className, size = "1rem", onClick, secondaryClass }, ref) => {
    const styles = {
      height: size,
      width: size,
    }

    return (
      <>
        <i
          className={`Icon ${className ? className : ""} ${
            secondaryClass ? secondaryClass : ""
          }`}
          style={styles}
          ref={ref}
          onClick={
            onClick
              ? onClick
              : () => {
                  return null
                }
          }></i>
      </>
    )
  }
)
