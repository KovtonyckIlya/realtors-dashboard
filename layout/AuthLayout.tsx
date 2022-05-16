import React from 'react';
import {Sidebar} from "../components/SideBar/SideBar";
import {NavBar} from '../components/NavBar/NavBar'
import {useLocation} from 'react-router-dom'
import {layoutPanelHide} from "../helpers/functions";
import {Container} from "react-bootstrap";
import {AuthNavBar} from "../components/AuthNavBar/NavBar";
import {Login} from "../pages/Login/Login";
import './style.scss'

export const AuthLayout = ({children}: any) => {
    const location = useLocation();
    const mainPanel: React.RefObject<HTMLDivElement> = React.useRef(null);

    React.useEffect(() => {
        try {
            layoutPanelHide(mainPanel)
        } catch (e) {
            console.warn(e)
        }
    }, [location]);

    return (
        <div className='mainLayout' style={{height: '100%'}}>
          <div className="mainLayout-image"></div>
            <div className="main-container">
              <AuthNavBar/>
              <Login />
            </div>
        </div>
    )
}
