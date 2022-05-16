import {INewRental, IRental} from "../../../../interface/rental";
import {Button, Col} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import React from "react";
import {getFormattedDate} from "../../../../helpers/functions";


interface RentalProps {
    rental: INewRental
}

export const Rental = ({rental}: RentalProps) => {
    const history = useHistory()


    const handleOpenDetails = () => {
        history.push({
            pathname: `/rentalDetail/${rental.asset}`,
            state: { rental }
        });
    }

    return (
        <>
            <div className={'cell'}
                 onClick={handleOpenDetails}>
                <label className={'label-rentals'} style={{cursor: 'pointer'}}>
                    {rental.details}
                </label>
            </div>
            <div className={'cell'}>
                <label className={'label-rentals'}>
                    {rental.asset}
                </label>
            </div>
            <div className={'cell'}>
                <label className={'label-rentals'}>
                    {rental.make}
                </label>
            </div>
            <div className={'cell'}>
                <label className={'label-rentals'}>
                    {rental.model}
                </label>
            </div>
            <div className={'cell'}>
                <label className={'label-rentals'}>
                    {getFormattedDate(rental.date_rented)}
                </label>
            </div>
            <div className={'cell'}>
                <label className={'label-rentals'}>
                    {getFormattedDate(rental.date_returned)}
                </label>
            </div>
        </>
    )
}
