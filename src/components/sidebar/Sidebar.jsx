import "./sidebar.scss"


import React from 'react'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <span className="logo">
                Lamadmin
            </span>
        </div>
        <div className="center">
            <ul>
                <li>
                    <span>Dashbord</span>
                </li>
                <li>
                    <span>Dashbord</span>
                </li>
                <li>
                    <span>Dashbord</span>
                </li>
                <li>
                    <span>Dashbord</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            color options
        </div>
    </div>
  )
}

export default Sidebar