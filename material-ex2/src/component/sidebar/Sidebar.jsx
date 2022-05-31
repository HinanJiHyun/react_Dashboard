import React from 'react'
import "./sidebar.css"
import {LineStyle, Timeline, TrendingUp} from '@mui/icons-material/';
import {Link} from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">MENU1</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon"/> Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon"/> Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon"/> Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">MENU2</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon"/> Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon"/> Products
              </li>
            </Link>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon"/> Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">MENU3</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon"/> Home
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon"/> Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon"/> Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">MENU4</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon"/> Home
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon"/> Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon"/> Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">MENU5</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon"/> Home
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon"/> Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon"/> Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">MENU6</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon"/> Home
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon"/> Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon"/> Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">MENU7</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon"/> Home
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon"/> Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon"/> Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">MENU8</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon"/> Home
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon"/> Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon"/> Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">MENU9</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon"/> Home
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon"/> Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon"/> 마지막 메뉴
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

