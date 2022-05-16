import React, {useState} from 'react';
import {Sidebar} from "../components/SideBar/SideBar";
import {NavBar} from '../components/NavBar/NavBar'
import {useLocation} from 'react-router-dom'
import {layoutPanelHide} from "../helpers/functions";
import {useAuth} from "../hooks/useAuth";

export const MainLayout = ({children}: any) => {
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
            <Sidebar/>
            <div className="main-panel" ref={mainPanel}>
                <NavBar/>
                {children}
            </div>
        </div>
    )
}
