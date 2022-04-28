import React, { useState } from 'react'
import  * as FcIcons  from "react-icons/vsc"
import  * as FaIcons  from "react-icons/fa"
import { Link } from 'react-router-dom'
import { SidebarData } from "./SidebarData"
import { IconContext } from 'react-icons/lib'
import './Navbar.css'

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    
    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
            <div className='navbar'>
                {/* <img src="logo1.jpg" alt='LOGO'></img> */}
                <Link to="#" className='menu-bars'>
                    <FcIcons.VscThreeBars onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars'>
                            <FaIcons.FaWindowClose />
                        </Link>
                    </li>
                    {SidebarData.map((sidebarItem, index) => {
                        return <li key={index} className={sidebarItem.className}>
                            <Link to={sidebarItem.path}>
                                {sidebarItem.icon}
                                <span>{sidebarItem.title}</span>
                            </Link>
                        </li>
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
            
        </>
    )
}

export default Navbar
