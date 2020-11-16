import React from "react"

const NavigationTheme = ({ theme }) => {
  const color = { backgroundColor: theme.color }
  const colors = {
    backgroundColor: theme.primaryColor,
    borderColor: theme.borderColor,
  }
  let active = theme.active ? "active" : ""

  function changeNavTheme(e, b, f, c, k, i) {
    document.documentElement.style.setProperty("--color-primary", b)
    document.documentElement.style.setProperty("--color-secondary", f)
    document.documentElement.style.setProperty("--color-primary-text", c)
    if (i === "none")
      document
        .querySelectorAll(".Nav-menu-item")
        .forEach((i) => (i.style.filter = "none"))
    else {
      document
        .querySelectorAll(".Nav-menu-item")
        .forEach((i) => (i.style.filter = ""))
    }
    document
      .querySelectorAll(".active")
      .forEach((i) => i.classList.remove("active"))
    document.querySelectorAll(`.${k}`).forEach((i) => i.classList.add("active"))
    document.activeElement.blur()
  }

  return (
    <div
      className={"Theme-item"}
      onClick={
        theme.class
          ? (
              e,
              b = theme.primaryColor,
              f = theme.secondaryColor,
              c = theme.color,
              k = theme.class,
              i = theme.invert
            ) => changeNavTheme(e, b, f, c, k, i)
          : () => null
      }>
      <div className={`Theme-preview ${active} ${theme.class}`} style={colors}>
        <div className="Theme-preview-menu-items-left" style={color}></div>
        <div className="Theme-preview-menu-items-right" style={color}></div>
      </div>
      <p className={`Theme-name ${active} ${theme.class}`}>{theme.name}</p>
    </div>
  )
}

export default NavigationTheme
