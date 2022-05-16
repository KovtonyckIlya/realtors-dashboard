import {Form} from "react-bootstrap";
import React from "react";
import {IService} from "../../../interface/service";

interface ServiceProps {
    service: IService
}

export const Contacts = ({service}: ServiceProps) => {
    return (
        <div className={'content-rma render-details'}>
            <div className="card card-body card-body-rma ">
                <label className={'label-legend'}>
                    Contact Information
                </label>
                <Form.Group className={'form-group-rma'}>
                    <label htmlFor="exampleInputEmail1">
                        Company
                    </label>
                    <div className={'field'}>
                        {service.technician}
                    </div>
                </Form.Group>
                <br/>
                <Form.Group className={'form-group-rma'}>
                    <label htmlFor="exampleInputEmail1">
                        Contact
                    </label>
                    <div className={'field'}>
                        {service.technician}
                    </div>
                </Form.Group>
            </div>
        </div>
    )
}
