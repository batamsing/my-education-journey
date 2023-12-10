import React from "react"
import './Sidebar.css'

export default function() {
    return (
        <div className="sidebar-container">
            <a href='#'>
                <img src="assets/facebook.png" className="sidebar-img" />
            </a>
            <a href='#'>
                <img src="assets/whatsapp.webp" className="sidebar-img" />
            </a>

            <a href='#'>
                <img src="assets/twitter.webp" className="sidebar-img" />
            </a>

            <a href='#'>
                <img src="assets/instagram.png" className="sidebar-img" />
            </a>
        </div>
    )
}