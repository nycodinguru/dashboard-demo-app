import React from 'react';

const NavigationTheme = (props) => {
    const color = { backgroundColor: props.v.color };
    const colors = { backgroundColor: props.v.backgroundColor, borderColor: props.v.borderColor };
    let active = props.v.active ? 'active' : '';

    function changeNavTheme(e, b, c, k, i) {
        document.documentElement.style.setProperty('--navcolor', b)
        document.documentElement.style.setProperty('--menucolor', c)
        if (i === 'none') document.querySelectorAll('.Nav-menu-item').forEach(i => i.style.filter = 'none')
        else { document.querySelectorAll('.Nav-menu-item').forEach(i => i.style.filter = '') }
        document.querySelectorAll('.active').forEach(i => i.classList.remove('active'))
        document.querySelectorAll(`.${k}`).forEach(i => i.classList.add('active'))
        document.activeElement.blur()
    }

    return (
        <div
            className={'Theme-item'}
            onClick={props.v.class ? (e, b = props.v.backgroundColor, c = props.v.color, k = props.v.class, i = props.v.invert) => changeNavTheme(e, b, c, k, i) : () => null}>
            <div className={`Theme-preview ${active} ${props.v.class}`} style={colors}>
                <div className='Theme-preview-menu-items-left' style={color}></div>
                <div className='Theme-preview-menu-items-right' style={color}></div>
            </div>
            <p className={`Theme-name ${active} ${props.v.class}`}>{props.v.name}</p>
        </div>
    )
}

export default NavigationTheme;
