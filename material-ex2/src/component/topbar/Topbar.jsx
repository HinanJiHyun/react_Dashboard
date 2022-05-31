import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language,  Settings} from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/" className="link">
            <span className="logo">lamaadmi</span>
          </Link>
        </div>
        <div className="topRight">
          <div className="topIconContainer">
            <NotificationsNone/>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topIconContainer">
            <Language/>
          </div>
          <div className="topIconContainer">
            <Settings/>
          </div>
          <img src="https://picsum.photos/500/500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}
