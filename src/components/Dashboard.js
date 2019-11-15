import React, { useState, useEffect } from 'react';
import { dashBoardDropDownItems } from '../data/data.js';
import notificationSound from '../assets/mp3s/pop-sound.mp3';

import SettingsPanels from './Settings/SettingsPanels';

export default function Dashboard() {
    const [activityMenuOpen, setactivityMenuOpen] = useState({
        isOpen: false
    });
    const [notificationFlag, setNotificationFlag] = useState({
        newNotification: false
    });
    const [renderMenuItems, setRenderMenuItems] = useState({
        render: false
    });
    
    const dropDownMenu = dashBoardDropDownItems.links.map((i, key) => {
        return (
            <li key={key + 1} className={`Dashboard-activity-item ${renderMenuItems.render ? 'Open' : 'Closed'}`}>{i.name}</li>
        )
    });

    useEffect(() => {
        let fakeNotifiction = setTimeout(() => newNotification(), 4000)
        return () => {
            clearTimeout(fakeNotifiction)
        };
    }, [])

    function newNotification() {
        setNotificationFlag({ ...notificationFlag, newNotification: true })
        if (notificationFlag.newNotification) playNotificationSound()
    }

    function playNotificationSound() {
        
    }

    function openAcitviyMenu() {
        if (!activityMenuOpen.isOpen) setactivityMenuOpen({ ...activityMenuOpen, isOpen: true })
        else if (activityMenuOpen.isOpen) setactivityMenuOpen({ ...activityMenuOpen, isOpen: false })
        renderMenu();
    }

    function renderMenu() {
        if (!activityMenuOpen.isOpen) setRenderMenuItems({...renderMenuItems, render: true})
        else { setRenderMenuItems({...renderMenuItems, render: false}) }
    }

    return (
        <React.Fragment>
            {notificationFlag.newNotification ? <audio src={notificationSound} autoPlay /> : ''}
            <div className='Dashboard-container'>
                <div className='Dashboard-container-inner'>
                    <div className='Dashboard-header'>
                        <div className='Dashboard-current'>
                            <h1 className='Dashboard-current-header'>Settings</h1>
                            <h3 className='Dashboard-current-path'> <span>Profile</span> Settings </h3>
                        </div>
                        <div className='Dashboard-header-info'>
                            <div className={`Dashboard-activity ${activityMenuOpen.isOpen ? 'Open' : 'Closed'}`} onClick={() => openAcitviyMenu()}>
                                <ul className={`Dashboard-activity-list ${activityMenuOpen.isOpen ? '' : 'Closed'}`}>
                                    {dropDownMenu}
                                </ul>
                            </div>
                            <div className={`Dashboard-notification ${notificationFlag.newNotification ? 'New-notification' : ''}`}>
                                <ul className='Dashboard-notification-list'>
                                    <li className='Dashboard-notification-item' onClick={() =>  setNotificationFlag({ ...notificationFlag, newNotification: false })}>2 New Messages!</li>
                                </ul>
                            </div>
                            <div className='Dashboard-profile-img'>
                                <ul className='Dashboard-profile-menu-list'>
                                    <li className='Dashboard-profile-menu-list-item'>Profile</li>
                                    <li className='Dashboard-profile-menu-list-item'>Help</li>
                                    <li className='Dashboard-profile-menu-list-item'>Sign Out</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <SettingsPanels />
                </div>
            </div>
        </React.Fragment>
    )
}
