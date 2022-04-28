import React from 'react'
import * as FcIcons  from "react-icons/vsc"
import * as FaIcons  from "react-icons/fa"
import * as IoIcons  from "react-icons/io"
import * as BiIcons from "react-icons/bi"
import * as MdIcons from "react-icons/md"

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <BiIcons.BiHome />,
        className: 'nav-text'
    },
    {
        title: "Movies",
        path: "/movies",
        icon: <BiIcons.BiCameraMovie />,
        className: 'nav-text'
    },
    {
        title: "TV Shows",
        path: "/tvshows",
        icon: <BiIcons.BiSlideshow />,
        className: 'nav-text'
    },
    {
        title: "Celebs",
        path: "/celebs",
        icon: <MdIcons.MdOutlinePersonAddAlt />,
        className: 'nav-text'
    },
    {
        title: "Upcoming",
        path: "/upcoming",
        icon: <MdIcons.MdEventNote  />,
        className: 'nav-text'
    },
    {
        title: "Contact",
        path: "/contact",
        icon: <MdIcons.MdConnectWithoutContact/>,
        className: 'nav-text'
    },
]