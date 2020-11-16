import React, { useEffect, useState } from "react"

import { Toggle, Icon } from "../ui"

import { settings, storedValues, themes } from "../../data/data.js"
import NavigationTheme from "./NavigationTheme.js"

const SettingsPanels = () => {
  const [state, setState] = useState({
    defaultCurrency: "",
    accountingMethodology: "",
    _smsNotifications: "",
    _emailNotifications: "",
    _profilePrivacy: "",
    _searchPrivacy: "",
    navigationTheme: "",
  })
  const [darkMode, setDarkMode] = useState()

  useEffect(() => {
    storedValues.forEach((i) => {
      setState((prev) => ({
        ...prev,
        [i.key]: i.value,
      }))
    })
    setTimeout(() => {
      toggleDarkMode()
    }, 2000)
  }, [])

  const handleToggle = (e) => {
    const name = e.target.getAttribute("name")
    const value = state[name] === "on" ? "off" : "on"

    setState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const panels = settings.map((i, key) => {
    return (
      <div className="Settings-panel" key={key + 1}>
        <h3 className="Settings-title">{i.title}</h3>
        {i.settings.map((j, key) => {
          return (
            <div className="Setting" key={key + 2}>
              <div className="Setting-left">
                <h4 className={"Setting-name"}>
                  {j.name}
                  {j.info && <Icon className={"Info"} />}
                </h4>
                <p className="Setting-description">{j.description}</p>
              </div>
              <div className="Setting-right">
                {j.control === "dropdown" ? (
                  <div className="Select-wrapper">
                    <select
                      className="Select-drop-down"
                      name=""
                      aria-label={`${j.ariaLabel}`}>
                      {j.values.map((o, key) => {
                        return (
                          <option value={`${o.toLowerCase()}`} key={key + 3}>
                            {o.toUpperCase()}
                          </option>
                        )
                      })}
                    </select>
                  </div>
                ) : (
                  j.control === "toggle" && (
                    <div
                      className={`Toggle ${
                        state[j.toggleName] === "off" ? "off" : "on"
                      } ${j.toggleName}`}
                      name={`${j.toggleName}`}>
                      <div
                        className={`Toggle-switch ${
                          state[j.toggleName] === "off" ? "off" : "on"
                        } ${j.toggleName}`}
                        name={`${j.toggleName}`}>
                        <div
                          className={`Toggle-cover ${
                            state[j.toggleName] === "off" ? "off" : "on"
                          } ${j.toggleName}`}
                          name={`${j.toggleName}`}
                          onClick={(e) => handleToggle(e)}
                          aria-label={`${j.ariaLabel}`}></div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          )
        })}
      </div>
    )
  })

  const toggleDarkMode = () => {
    if (!darkMode) {
      document.querySelector("html").classList.add("dark")
      // localStorage.setItem("darkMode", "true")
      setDarkMode(true)
      // setDarkMode(true, dispatch)
    } else {
      document.querySelector("html").classList.remove("dark")
      // localStorage.setItem("darkMode", "false")
      setDarkMode(false)
      // setDarkMode(false, dispatch)
    }
    //setTheme()
  }

  const themePanel = themes.map((g, key) => {
    return (
      <div className="Settings-panel" key={key + 6}>
        <h3 className="Settings-title">{g.title}</h3>
        <div className="Themes-container">
          <div className="Dark-mode-toggle">
            <Toggle
              label={"Dark Mode"}
              value={darkMode}
              setValue={toggleDarkMode}
            />
          </div>
          {g.themes.map((v, key) => {
            return (
              <NavigationTheme
                navigationTheme={state.navigationTheme}
                theme={v}
                key={key}
              />
            )
          })}
        </div>
      </div>
    )
  })

  return (
    <div className="Dashboard-menu">
      {panels}
      {themePanel}
    </div>
  )
}

export default SettingsPanels
