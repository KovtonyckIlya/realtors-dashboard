import {Container, Form} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {IService} from "../../interface/service";
import {useLocation, useParams} from "react-router-dom";
import {Contacts} from "./Components/Contacts";
import {Rental} from "../RentalDetails/Components/Rental";
import {Billing} from "../RentalDetails/Components/Billing";
import {Shipping} from "../RentalDetails/Components/Shipping";
import {Dates} from "../RentalDetails/Components/Dates";
import {Equitment} from "../RentalDetails/Components/Equitment";
import {EquipmentInformation} from "./Components/EquipmentInformation";
import {Model} from "./Components/Model";
import {Courier} from "./Components/Courier";
import {useDispatch} from "react-redux";
import {IRental} from "../../interface/rental";
import {getRentalsRequest} from "../../redux/rentals/actions";
import {getServicesRequest} from "../../redux/services/actions";

interface IServiceProps {
    id: string,
}

export const ServiceDetails = () => {
    const [service, setService] = useState<IService | undefined>()
    const location = useLocation()


    const dispatch = useDispatch()

    const params = useParams() as { id: string }
    useEffect(() => {

        try {
            const state = location.state as { service: IService }
            if (!state || (!state.service && params.id)) {
                setServiceFromId()
            }else if (state.service as IService) {
                setService(state.service)
            }
        } catch (e) {
            console.warn(e)
        }
    }, [])

    const setServiceFromId = () => {
        dispatch(getServicesRequest(1))
    }
    return (

        <Container style={{marginTop: 25}}>
            {service && <>
                <Contacts service={service}/>
                <EquipmentInformation service={service}/>
                <Model service={service}/>
                <Courier service={service}/>
            </>}
        </Container>
    )
}
