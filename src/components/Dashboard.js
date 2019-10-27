import React, { useState, useEffect } from 'react';
import SettingsPanels from './Settings/SettingsPanels';
import { dashBoardDropDownItems } from '../data/data.js';
import notificationSound from '../assets/mp3s/pop-sound.mp3';

export default function Dashboard() {
    const [activityMenuOpen, setactivityMenuOpen] = useState({
        isOpen: false
    });
    const [notificationFlag, setNotificationFlag] = useState({
        newNotification: false
    });
    const _activityMenu = React.createRef();
    const _dashboardActivity = React.createRef();
    const _notificationBell = React.createRef();
    const _notificationSound = React.createRef();
    const dropDownMenu = dashBoardDropDownItems.links.map((i, key) => {
        return (
            <li key={key + 1} className='Dashboard-activity-item'>{i.name}</li>
        )
    });

    useEffect(() => {
        let fakeNotifiction = setTimeout(() => newNotification(), 4000)
        return () => {
            clearTimeout(fakeNotifiction)
        };
    }, [])

    function newNotification() {
        if (_notificationBell.current) {
            _notificationBell.current.classList.add('New-notification')
            playNotificationSound();
        }
    }

    function playNotificationSound() {
        setNotificationFlag({ ...notificationFlag, newNotification: true })
    }

    function openAcitviyMenu() {
        let setTimeOutTime = activityMenuOpen.isOpen ? 100 : 300
        if (!activityMenuOpen.isOpen) setactivityMenuOpen({ ...activityMenuOpen, isOpen: true })
        else if (activityMenuOpen.isOpen) setactivityMenuOpen({ ...activityMenuOpen, isOpen: false })

        if (!activityMenuOpen.isOpen) {
            _activityMenu.current.classList.remove('Close');
            _dashboardActivity.current.classList.remove('Close');
            _dashboardActivity.current.classList.add('Open');
        }
        if (activityMenuOpen.isOpen) {
            _activityMenu.current.classList.add('Close');
            _dashboardActivity.current.classList.add('Close');
            _dashboardActivity.current.classList.remove('Open');

        }
        setTimeout(() => renderMenu(), setTimeOutTime);
    }

    function renderMenu() {
        if (!activityMenuOpen.isOpen) {
            document.querySelectorAll('.Dashboard-activity-item').forEach(i => {
                i.classList.remove('Close')
                i.classList.add('Open')
            })
        }
        else {
            document.querySelectorAll('.Dashboard-activity-item').forEach(i => {
                i.classList.add('Close')
                i.classList.remove('Open')
            })
        }
    }

    return (
        <React.Fragment>
            {notificationFlag.newNotification ? <audio ref={_notificationSound} src={notificationSound} autoPlay /> : ''}
            <div className='Dashboard-container'>
                <div className='Dashboard-container-inner'>
                    <div className='Dashboard-header'>
                        <div className='Dashboard-current'>
                            <h1 className='Dashboard-current-header'>Settings</h1>
                            <h3 className='Dashboard-current-path'> <span>Profile</span> Settings </h3>
                        </div>
                        <div className='Dashboard-header-info'>
                            <div className='Dashboard-activity' ref={_dashboardActivity} onClick={() => openAcitviyMenu()}>
                                <ul className='Dashboard-activity-list' ref={_activityMenu}>
                                    {dropDownMenu}
                                </ul>
                            </div>
                            <div className='Dashboard-notification' ref={_notificationBell}>
                                <ul className='Dashboard-notification-list'>
                                    <li className='Dashboard-notification-item' onClick={() => _notificationBell.current.classList.remove('New-notification')}>2 New Messages!</li>
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
