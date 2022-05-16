import React from "react";
import {useLocation, useHistory} from "react-router-dom";
import {Navbar, Container, Nav, Button} from "react-bootstrap";
import './style.scss'

import {sideBarRoutes} from '../../routers/sideBar'
import {List} from 'react-bootstrap-icons'
import {sideBarToggle} from "../../helpers/functions";
import {ROUTERS} from "../../constants/routers";

export const AuthNavBar = () => {
    return (
      <div className="logo"></div>
    );
}

