import React, { useEffect } from "react"
import { navMenuItems } from "../data/data.js"

export default function NavPanel(props) {
  useEffect(() => {
    if (window.innerWidth > 766) {
      setTimeout(() => openNav(), 1000)
      setTimeout(() => closeNav(), 2000)
    }
    return () => {
      clearTimeout(closeNav)
      clearTimeout(openNav)
    }
  }, [])

  function openNav() {
    if (window.innerWidth < 766) {
      props.dispatch({ type: "nav_panel", value: true })
      document.querySelector("body").classList.add("Open")
    }
  }

  function closeNav() {
    if (window.innerWidth < 766) {
      props.dispatch({ type: "nav_panel", value: false })
      setTimeout(() => {
        document.querySelector("body").classList.remove("Open")
      }, 300)
    }
  }

  const navMenu = navMenuItems.map((i, key) => {
    return (
      <ul className={`${i.group}`} key={key + 1}>
        {i.names.map((g, key) => {
          return (
            <li
              className={`Nav-menu-item ${
                props.state.navOpen ? "Open" : "Closed"
              } ${g.name}`}
              key={key + 2}
              onClick={() => closeNav()}
              aria-label={`${g.ariaLabel}`}></li>
          )
        })}
      </ul>
    )
  })

  return (
    <>
      <div
        className={`Nav-panel-container ${
          props.state.navOpen ? "Open" : "Closed"
        }`}
        onMouseEnter={() => openNav()}
        onMouseLeave={() => closeNav()}>
        <div className={`Nav-panel ${props.state.navOpen ? "Open" : "Closed"}`}>
          <h3 className="Nav-panel-logo">
            Linus
            <svg
              className="Nav-panel-svg-logo"
              width="2009"
              height="976"
              viewBox="0 0 2009 976"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <line
                x1="2009"
                y1="755.5"
                x2="9.00098"
                y2="755.5"
                stroke="#BAE9DD"
                strokeWidth="200"
              />
              <path
                d="M202.006 779.3C160.94 779.3 129.206 768.1 106.806 745.7C84.4063 722.767 73.2063 690.767 73.2063 649.7V180.9H150.006V643.3C150.006 666.233 155.34 683.833 166.006 696.1C177.206 708.367 193.74 714.5 215.606 714.5C228.94 714.5 241.473 711.833 253.206 706.5L257.206 769.7C239.606 776.1 221.206 779.3 202.006 779.3ZM330.238 350.5H407.038V774.5H330.238V350.5ZM368.638 268.9C353.704 268.9 341.171 264.1 331.038 254.5C321.438 244.9 316.638 233.167 316.638 219.3C316.638 205.433 321.438 193.7 331.038 184.1C341.171 173.967 353.704 168.9 368.638 168.9C383.571 168.9 395.838 173.7 405.438 183.3C415.571 192.367 420.638 203.833 420.638 217.7C420.638 232.1 415.571 244.367 405.438 254.5C395.838 264.1 383.571 268.9 368.638 268.9ZM780.075 346.5C833.942 346.5 876.608 362.233 908.075 393.7C940.075 424.633 956.075 470.233 956.075 530.5V774.5H879.275V539.3C879.275 498.233 869.408 467.3 849.675 446.5C829.942 425.7 801.675 415.3 764.875 415.3C723.275 415.3 690.475 427.567 666.475 452.1C642.475 476.1 630.475 510.767 630.475 556.1V774.5H553.675V350.5H627.275V414.5C642.742 392.633 663.542 375.833 689.675 364.1C716.342 352.367 746.475 346.5 780.075 346.5ZM1493.41 350.5V774.5H1420.61V710.5C1405.14 732.367 1384.61 749.433 1359.01 761.7C1333.94 773.433 1306.47 779.3 1276.61 779.3C1220.07 779.3 1175.54 763.833 1143.01 732.9C1110.47 701.433 1094.21 655.3 1094.21 594.5V350.5H1171.01V585.7C1171.01 626.767 1180.87 657.967 1200.61 679.3C1220.34 700.1 1248.61 710.5 1285.41 710.5C1325.94 710.5 1357.94 698.233 1381.41 673.7C1404.87 649.167 1416.61 614.5 1416.61 569.7V350.5H1493.41ZM1761.21 779.3C1726.55 779.3 1693.21 774.767 1661.21 765.7C1629.21 756.1 1604.15 744.1 1586.01 729.7L1618.01 668.9C1636.68 682.233 1659.35 692.9 1686.01 700.9C1712.68 708.9 1739.61 712.9 1766.81 712.9C1834.01 712.9 1867.61 693.7 1867.61 655.3C1867.61 642.5 1863.08 632.367 1854.01 624.9C1844.95 617.433 1833.48 612.1 1819.61 608.9C1806.28 605.167 1787.08 601.167 1762.01 596.9C1727.88 591.567 1699.88 585.433 1678.01 578.5C1656.68 571.567 1638.28 559.833 1622.81 543.3C1607.35 526.767 1599.61 503.567 1599.61 473.7C1599.61 435.3 1615.61 404.633 1647.61 381.7C1679.61 358.233 1722.55 346.5 1776.41 346.5C1804.68 346.5 1832.95 349.967 1861.21 356.9C1889.48 363.833 1912.68 373.167 1930.81 384.9L1898.01 445.7C1863.35 423.3 1822.55 412.1 1775.61 412.1C1743.08 412.1 1718.28 417.433 1701.21 428.1C1684.15 438.767 1675.61 452.9 1675.61 470.5C1675.61 484.367 1680.41 495.3 1690.01 503.3C1699.61 511.3 1711.35 517.167 1725.21 520.9C1739.61 524.633 1759.61 528.9 1785.21 533.7C1819.35 539.567 1846.81 545.967 1867.61 552.9C1888.95 559.3 1907.08 570.5 1922.01 586.5C1936.95 602.5 1944.41 624.9 1944.41 653.7C1944.41 692.1 1927.88 722.767 1894.81 745.7C1862.28 768.1 1817.75 779.3 1761.21 779.3Z"
                fill="#FFF"
              />
            </svg>
          </h3>
          <div className="Nav-menus">{navMenu}</div>
        </div>
        <div
          className={`Close-click-area ${
            props.state.navOpen ? "Open" : "Closed"
          }`}
          onClick={() => closeNav()}></div>
      </div>
      <div
        className={`Floating-nav-button ${
          props.state.navOpen ? "Open" : "Closed"
        }`}
        onClick={() => openNav()}>
        <div className="Floating-nav-button-label">Menu</div>
        <div className="Floating-nav-button-icon"></div>
      </div>
    </>
  )
}
