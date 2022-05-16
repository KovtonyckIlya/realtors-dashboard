import {Form} from "react-bootstrap";
import React from "react";
import {IService} from "../../../interface/service";

interface ServiceProps {
    service: IService
}

export const Model = ({service}: ServiceProps) => {
    return (
        <div className={'content-rma render-details'}>
            <div className="card card-body card-body-rma ">
                <label className={'label-legend'}>
                    {service.model}
                </label>
                <Form.Group className={'form-group-rma'}>
                    <label htmlFor="exampleInputEmail1">
                        Priority
                    </label>
                    <div className={'field'}>
                        {service.technician}
                    </div>
                </Form.Group>
                <br/>
                <Form.Group className={'form-group-rma'}>
                    <label htmlFor="exampleInputEmail1">
                        Approval Date
                    </label>
                    <div className={'field'}>
                        {service.technician}
                    </div>
                </Form.Group>
                <br/>
                <Form.Group className={'form-group-rma'}>
                    <label htmlFor="exampleInputEmail1">
                        Approved By
                    </label>
                    <div className={'field'}>
                        {service.technician}
                    </div>
                </Form.Group>

                <br/>
                <Form.Group className={'form-group-rma'}>
                    <label htmlFor="exampleInputEmail1">
                        PO
                    </label>
                    <div className={'field'}>
                        {service.technician}
                    </div>
                </Form.Group>

                <br/>
                <Form.Group className={'form-group-rma'}>
                    <label htmlFor="exampleInputEmail1">
                        Received
                    </label>
                    <div className={'field'}>
                        {service.technician}
                    </div>
                </Form.Group>
                <br/>
                <Form.Group className={'form-group-rma'}>
                    <label htmlFor="exampleInputEmail1">
                        In Service
                    </label>
                    <div className={'field'}>
                        {service.technician}
                    </div>
                </Form.Group>

                <br/>
                <Form.Group className={'form-group-rma'}>
                    <label htmlFor="exampleInputEmail1">
                        Done Service
                    </label>
                    <div className={'field'}>
                        {service.technician}
                    </div>
                </Form.Group>

                <br/>
                <Form.Group className={'form-group-rma'}>
                    <label htmlFor="exampleInputEmail1">
                        Quoted
                    </label>
                    <div className={'field'}>
                        {service.technician}
                    </div>
                </Form.Group>

                <br/>
                <Form.Group className={'form-group-rma'}>
                    <label htmlFor="exampleInputEmail1">
                        With Shipping
                    </label>
                    <div className={'field'}>
                        {service.technician}
                    </div>
                </Form.Group>

                <br/>
                <Form.Group className={'form-group-rma'}>
                    <label htmlFor="exampleInputEmail1">
                        Adjusting Quote
                    </label>
                    <div className={'field'}>
                        {service.technician}
                    </div>
                </Form.Group>

                <br/>
                <Form.Group className={'form-group-rma'}>
                    <label htmlFor="exampleInputEmail1">
                        Finalized
                    </label>
                    <div className={'field'}>
                        {service.technician}
                    </div>
                </Form.Group>
            </div>
        </div>
    )
}
