import React, { useState, useEffect, useContext } from "react"

import { DropDown, Icon } from "./ui"

import notificationSound from "../assets/mp3s/pop-sound.mp3"

import SettingsPanels from "./Settings/SettingsPanels"

import { GlobalStateContext } from "../contexts/global-context-provider"

import { useToastContext } from "../hooks"

export default function Dashboard() {
  const [notificationFlag, setNotificationFlag] = useState({
    newNotification: false,
  })
  const state = useContext(GlobalStateContext)
  const addToastMessage = useToastContext()

  useEffect(() => {
    let fakeNotifiction = setTimeout(() => {
      addToastMessage({
        message: "New message from Wendi!",
        status: "neutral",
        iconClass: "Message",
      })
      newNotification()
    }, 4000)
    let fakeNotifiction2 = setTimeout(() => {
      addToastMessage({
        message: "New message from Morgan!",
        status: "neutral",
        iconClass: "Message",
      })
      newNotification()
    }, 4500)
    return () => {
      clearTimeout(fakeNotifiction)
      clearTimeout(fakeNotifiction2)
    }
  }, [])

  function newNotification() {
    setNotificationFlag({ ...notificationFlag, newNotification: true })
  }

  const doNothing = () => {
    return null
  }

  return (
    <>
      {notificationFlag.newNotification ? (
        <audio src={notificationSound} autoPlay />
      ) : (
        ""
      )}
      <div
        className={`Dashboard-container ${state.navPanelOpen ? "Open" : ""}`}>
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
              <DropDown
                label={"Manage Assets"}
                className={"Activities-menu"}
                items={[
                  { label: "My Portfolio", callback: doNothing },
                  { label: "Messages", callback: doNothing },
                  { label: "Activity", callback: doNothing },
                ]}
                onClick={() => doNothing()}
              />
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
