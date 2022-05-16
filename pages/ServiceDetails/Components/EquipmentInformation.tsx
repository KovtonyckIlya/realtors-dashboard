import {Form} from "react-bootstrap";
import React from "react";
import {IService} from "../../../interface/service";

interface ServiceProps {
    service: IService
}

export const EquipmentInformation = ({service}: ServiceProps) => {
    return (
        <div className={'content-rma render-details'}>
            <div className="card card-body card-body-rma ">
                <label className={'label-legend'}>
                    Contact Information
                </label>
                <Form.Group className={'form-group-rma'}>
                    <label htmlFor="exampleInputEmail1">
                        Asset #
                    </label>
                    <div className={'field'}>
                        {service.technician}
                    </div>
                </Form.Group>
                <br/>
                <Form.Group className={'form-group-rma'}>
                    <label htmlFor="exampleInputEmail1">
                        Serial #
                    </label>
                    <div className={'field'}>
                        {service.technician}
                    </div>
                </Form.Group>
                <br/>
                <Form.Group className={'form-group-rma'}>
                    <label htmlFor="exampleInputEmail1">
                        Client #
                    </label>
                    <div className={'field'}>
                        {service.technician}
                    </div>
                </Form.Group>

                <br/>
                <Form.Group className={'form-group-rma'}>
                    <label htmlFor="exampleInputEmail1">
                        Make
                    </label>
                    <div className={'field'}>
                        {service.technician}
                    </div>
                </Form.Group>

                <br/>
                <Form.Group className={'form-group-rma'}>
                    <label htmlFor="exampleInputEmail1">
                        Model
                    </label>
                    <div className={'field'}>
                        {service.technician}
                    </div>
                </Form.Group>
                <br/>
                <Form.Group className={'form-group-rma'}>
                    <label htmlFor="exampleInputEmail1">
                        Description
                    </label>
                    <div className={'field'}>
                        {service.technician}
                    </div>
                </Form.Group>

                <br/>
                <Form.Group className={'form-group-rma'}>
                    <label htmlFor="exampleInputEmail1">
                        Accessories Sent
                    </label>
                    <div className={'field'}>
                        {service.technician}
                    </div>
                </Form.Group>

                <br/>
                <Form.Group className={'form-group-rma'}>
                    <label htmlFor="exampleInputEmail1">
                        Service Notes
                    </label>
                    <div className={'field'}>
                        {service.technician}
                    </div>
                </Form.Group>
            </div>
        </div>
    )
}
