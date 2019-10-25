import React, { useEffect } from 'react';
import { navMenuItems } from '../data/data.js';

export default function NavPanel() {
    const _navPanel = React.createRef();
    const _floatingNavButton = React.createRef();

    useEffect(() => {
        if (window.innerWidth > 766){
            setTimeout( () => openNav(), 1000)
            setTimeout( () => closeNav(), 2000)
        }
        return () => {
            closeNav()
            openNav()
        };
    })

    function openNavHelper(){
        if (window.innerWidth > 766) openNav()
    }

    function closeNavHelper(){
        if (window.innerWidth > 766) closeNav()
    }

    function openNav(){
        _navPanel.current.classList.remove('Closed')
        document.querySelector('.Dashboard-container').classList.add('Open')
        document.querySelector('body').classList.add('Open')
        _floatingNavButton.current.classList.add('Open')
    }

    function closeNav(){
        setTimeout( () => {
            _navPanel.current.classList.add('Closed')
            document.querySelector('.Dashboard-container').classList.remove('Open')
            document.querySelector('body').classList.remove('Open')
            _floatingNavButton.current.classList.remove('Open')
        }, 450)
    }


    const navMenu = navMenuItems.map( (i, key) => {
            return (
            <ul className={`${i.group}`} key={key + 1}>
                {i.names.map( (g, key) => { return  <li className={`Nav-menu-item ${g.name}`} key={key + 2} onClick={() => closeNav()}></li>})}
            </ul>
            )
        } )
    

    return (
        <React.Fragment>
        <div className='Nav-panel-container Closed' ref={_navPanel} onMouseEnter={() => openNavHelper()} onMouseLeave={() => closeNavHelper()}>
            <div className='Close-button-parent'>
                <div className='Close-button' onClick={() => closeNav()}></div>  
            </div>
            <h3 className='Nav-panel-logo'>Linus</h3>
            <div className='Nav-menus'>
                {navMenu}
            </div>
        </div>
        <div className='Floating-nav-button' ref={_floatingNavButton} onClick={() => openNav()}>
                <div className='Floating-nav-button-label'>Menu</div>
                <div className='Floating-nav-button-icon'></div>
        </div>
        </React.Fragment>
        )
    }
