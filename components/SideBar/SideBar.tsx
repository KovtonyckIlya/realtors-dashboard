import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import {sideBarRoutes} from '../../routers/sideBar'

import {Nav} from "react-bootstrap";
import backgroundImage from "../../assets/img/sidebar-4.jpg";
import {ROUTERS} from "../../constants/routers";
import './style.scss'
export const Sidebar = () => {
    const location = useLocation();

    return (
        <div className="sidebar" data-color='black'>
            <div className="sidebar-wrapper">
                <Nav>
                    {sideBarRoutes.map((prop, key) => {
                        return (
                            <li
                                className={`${location.pathname === prop.path ? 'active' : ''} active-pro`}
                                key={key}
                            >
                                <NavLink
                                    to={prop.path}
                                    className={`${prop.path === ROUTERS.logout ? 'logout' : ''} nav-link`}
                                    activeClassName="active"
                                >
                                    <div style={{display: 'contents'}}>
                                        {prop.icon}
                                    </div>
                                    <p>{prop.name}</p>
                                </NavLink>
                            </li>
                        );
                    })}
                </Nav>
            </div>
        </div>
    );
}

