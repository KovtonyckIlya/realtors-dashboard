import React from "react";
import {getFormattedDate} from "../../../../helpers/functions";
import {ISale} from "../../../../interface/sale";
import {Rental} from "../../../Rentals/Components/Rental/Rental";


interface SaleProps {
    sale: ISale
}


export const SaleItem = ({sale}: SaleProps) => {
    return (
        <>
            <div className='cell'>
                <label className='label-rentals' style={{cursor: 'pointer'}}>
                    {sale.id}
                </label>
            </div>

            <div className='cell' >
                <label className='label-rentals'>
                    {sale.make}
                </label>
            </div>
            <div className='cell'>
                <label className='label-rentals'>
                    {sale.model}
                </label>
            </div>
            <div className='cell'>
                <label className='label-rentals'>
                    {sale.serial}
                </label>
            </div>
            <div className='cell'>

                <label className='label-rentals'>
                    {sale.purchaseOrderId}
                </label>
            </div>
            <div className='cell'>
                <label className='label-rentals'>
                    {getFormattedDate(sale.orderDate)}
                </label>
            </div>
        </>

    )
}
