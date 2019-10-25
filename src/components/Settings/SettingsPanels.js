import React, { useState } from 'react';
import { settings, themes } from '../../data/data.js';
import NavigationTheme from './NavigationTheme.js';

const SettingsPanels = () => {
    const [toggles, setToggles] = useState({
        defaultCurrency: '',
        accountingMethodology: '',
        _smsNotifications: '',
        _emailNotifications: '',
        _profilePrivacy: '',
        _searchPrivacy: '',
        navigationTheme: ''
    });

    const handleToggle = (e) => {
        const name = e.target.getAttribute('name');

        if (e.target.classList.contains('off')) {
            setToggles({
                ...toggles,
                [name]: 'on'
            })
            document.querySelectorAll(`.${name}`).forEach((k) => {
                k.classList.remove('off')
                k.classList.add('on')
            })
        }
        else if (e.target.classList.contains('on')) {
            setToggles({
                ...toggles,
                [name]: 'off'
            })
            document.querySelectorAll(`.${name}`).forEach((k) => {
                k.classList.remove('on')
                k.classList.add('off')
            })
        }
    }

    const panels = settings.map((i, key) => {
        return (
            <div className='Settings-panel' key={key + 1}>
                <h3 className='Settings-title'>{i.title}</h3>
                {i.settings.map((j, key) => {
                    return (
                        <div className='Setting' key={key + 2}>
                            <div className='Setting-left'>
                                <h4 className={`Setting-name ${j.info ? 'info' : ''}`}>{j.name}</h4>
                                <p className='Setting-description'>{j.description}</p>
                            </div>
                            <div className='Setting-right'>
                                {j.control === 'dropdown' ?
                                    <div className='Select-wrapper'>
                                        <select className='Select-drop-down' name='' aria-label={`${j.ariaLabel}`}>
                                            {j.values.map((o, key) => {
                                                return (
                                                    <option value={`${o.toLowerCase()}`} key={key + 3}>
                                                        {o.toUpperCase()}
                                                    </option>
                                                )
                                            })
                                            }
                                        </select>
                                    </div> : j.control === 'toggle' ?
                                        <div
                                            className={`Toggle ${j.values[0]} ${j.toggleName}`}
                                            name={`${j.toggleName}`} >
                                            <div
                                                className={`Toggle-switch ${j.values[0]} ${j.toggleName}`}
                                                name={`${j.toggleName}`}>
                                                <div
                                                    className={`Toggle-cover ${j.values[0]} ${j.toggleName}`}
                                                    name={`${j.toggleName}`}
                                                    onClick={(e) => handleToggle(e)}
                                                    aria-label={`${j.ariaLabel}`}>
                                                </div>
                                            </div>
                                        </div> : ''}
                            </div>
                        </div>
                    )
                })
                }
            </div>
        )
    })

    const themePanel = themes.map((g, key) => {
        return (
            <div className='Settings-panel' key={key + 6}>
                <h3 className='Settings-title'>{g.title}</h3>
                <div className='Themes-container'>
                    {g.themes.map((v, key) => {
                        return (
                            <NavigationTheme
                                v={v}
                                key={key}
                            />
                        )
                    })}
                </div>

            </div>
        )
    })

    return (
        <div className='Dashboard-menu'>
            {panels}
            {themePanel}
        </div>
    )


}

export default SettingsPanels;