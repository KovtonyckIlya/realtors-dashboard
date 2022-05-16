import {Form} from "react-bootstrap";
import React from "react";
import {IService} from "../../../interface/service";

interface ServiceProps {
    service: IService
}

export const Courier = ({service}: ServiceProps) => {
    return (
        <div className={'content-rma render-details'}>
            <div className="card card-body card-body-rma ">
                <label className={'label-legend'}>
                    Courier
                </label>
                <Form.Group className={'form-group-rma'}>
                    <label htmlFor="exampleInputEmail1">
                        Received Method
                    </label>
                    <div className={'field'}>
                        {service.technician}
                    </div>
                </Form.Group>
                <br/>
                <Form.Group className={'form-group-rma'}>
                    <label htmlFor="exampleInputEmail1">
                        IN
                    </label>
                    <div className={'field'}>
                        {service.technician}
                    </div>
                </Form.Group>
                <br/>
                <Form.Group className={'form-group-rma'}>
                    <label htmlFor="exampleInputEmail1">
                        OUT
                    </label>
                    <div className={'field'}>
                        {service.technician}
                    </div>
                </Form.Group>

            </div>
        </div>
    )
}
