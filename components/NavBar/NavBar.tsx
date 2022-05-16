import React, {useEffect} from "react";
import {useLocation, useHistory} from "react-router-dom";
import {Navbar, Container, Nav, Button} from "react-bootstrap";

import {sideBarRoutes} from '../../routers/sideBar'
import {List} from 'react-bootstrap-icons'
import {sideBarToggle} from "../../helpers/functions";
import {ROUTERS} from "../../constants/routers";
import {useAuth} from "../../hooks/useAuth";
import {useDispatch, useSelector} from "react-redux";
import {IRootReducer} from "../../redux/rootReducer";
import {getUserRequest, setUserCurrentRole} from "../../redux/users/actions";
import './style.scss'

export const NavBar = ({role = 'admin'}) => {
    const location = useLocation();
    const history = useHistory();
    const auth = useAuth()
    const {user} = useSelector((store: IRootReducer) => store.user)
    const dispatch = useDispatch()
    const mobileSidebarToggle = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        sideBarToggle(e)
    };

    useEffect(() => {
        dispatch(getUserRequest())
    }, [])

    const getBrandText = () => {
        for (let i = 0; i < sideBarRoutes.length; i++) {
            if (location.pathname.indexOf(sideBarRoutes[i].path) !== -1) {
                return sideBarRoutes[i].name;
            }
        }
        return "Brand";
    };

    const logout = (e: any) => {
        auth.signOut()
        e.preventDefault()
    }

    const handleChangeRole = (role: string) => {
        dispatch(setUserCurrentRole(role));
    }

    const handleClickAdmin = (e: any) => {
        e.preventDefault();
        if (location.pathname === '/admin' || user.currentRole !== user.role) {
            handleChangeRole(user.currentRole === 'user' ? 'admin' : 'user')
        } else {
            history.push(ROUTERS.admin)
        }
    }

    return (
        <div className="header">
            <div className="header-logo" />
        </div>
    );
}

