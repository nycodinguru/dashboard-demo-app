import React, { useState, useEffect } from "react"

import { Icon } from "./ui"

import { dashBoardDropDownItems } from "../data/data.js"
import notificationSound from "../assets/mp3s/pop-sound.mp3"

import SettingsPanels from "./Settings/SettingsPanels"

export default function Dashboard(props) {
  const [activityMenuOpen, setactivityMenuOpen] = useState(false)
  const [notificationFlag, setNotificationFlag] = useState({
    newNotification: false,
  })
  const [renderMenuItems, setRenderMenuItems] = useState(false)

  const dropDownMenu = dashBoardDropDownItems.links.map((i, key) => {
    return (
      <li
        key={key + 1}
        className={`Dashboard-activity-item ${
          renderMenuItems ? "Open" : "Closed"
        }`}>
        {i.name}
      </li>
    )
  })

  useEffect(() => {
    let fakeNotifiction = setTimeout(() => newNotification(), 4000)
    return () => {
      clearTimeout(fakeNotifiction)
    }
  }, [])

  function newNotification() {
    setNotificationFlag({ ...notificationFlag, newNotification: true })
  }

  function openAcitviyMenu() {
    if (!activityMenuOpen) setactivityMenuOpen(true)
    else if (activityMenuOpen) setactivityMenuOpen(false)
    renderMenu()
  }

  function renderMenu() {
    if (!activityMenuOpen) setRenderMenuItems(true)
    else {
      setRenderMenuItems(false)
    }
  }

  return (
    <>
      {notificationFlag.newNotification ? (
        <audio src={notificationSound} autoPlay />
      ) : (
        ""
      )}
      <div
        className={`Dashboard-container ${props.state.navOpen ? "Open" : ""}`}>
        <div className="Dashboard-container-inner">
          <div className="Dashboard-header">
            <div className="Dashboard-current">
              <h1 className="Dashboard-current-header">Settings</h1>
              <h3 className="Dashboard-current-path">
                {" "}
                <span>Profile</span>
                <Icon className={"Chevron-right"} />
                Settings{" "}
              </h3>
            </div>
            <div className="Dashboard-header-info">
              <div
                className={`Dashboard-activity ${
                  activityMenuOpen ? "Open" : "Closed"
                }`}
                onClick={() => openAcitviyMenu()}>
                <ul
                  className={`Dashboard-activity-list ${
                    activityMenuOpen ? "" : "Closed"
                  }`}>
                  {dropDownMenu}
                </ul>
              </div>
              <div
                className={`Dashboard-notification ${
                  notificationFlag.newNotification ? "New-notification" : ""
                }`}>
                <Icon className={"Bell"} />
                <ul className="Dashboard-notification-list">
                  <li
                    className="Dashboard-notification-item"
                    onClick={() =>
                      setNotificationFlag({
                        ...notificationFlag,
                        newNotification: false,
                      })
                    }>
                    2 New Messages!
                  </li>
                </ul>
              </div>
              <div className="Dashboard-profile-img">
                <ul className="Dashboard-profile-menu-list">
                  <li className="Dashboard-profile-menu-list-item">Profile</li>
                  <li className="Dashboard-profile-menu-list-item">Help</li>
                  <li className="Dashboard-profile-menu-list-item">Sign Out</li>
                </ul>
              </div>
            </div>
          </div>
          <SettingsPanels />
        </div>
      </div>
    </>
  )
}
