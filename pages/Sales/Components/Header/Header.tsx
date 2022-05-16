import React from "react";
import {SearchInput} from '../SearchInput/SearchInput'

export const Header = (props: { handleSearch: any }) => {
    const {handleSearch} = props;
    return (
        <>
            <div className="cell">

                <label className='label-rentals'>
                    Sales Order
                </label>
                <SearchInput onChange={() => {}} handleSearch={(v) => handleSearch('id', v)} placeholder='R - #'/>
            </div>
            <div className="cell">
                <label className='label-rentals'>
                    Make
                </label>
                <SearchInput onChange={() => {}} handleSearch={(v) => handleSearch('make', v)} placeholder='I - #'/>
            </div>
            <div className="cell">

                <label className='label-rentals'>
                    Model
                </label>
                <SearchInput onChange={() => {}} handleSearch={(v) => handleSearch('model', v)} placeholder='I - #'/>
            </div>
            <div className="cell">

                <label className='label-rentals'>
                  S/N
                </label>
                <SearchInput onChange={() => {}} handleSearch={(v) => handleSearch('serial', v)} placeholder='I - #'/>
            </div>
            <div className="cell">

                <label className='label-rentals'>
                  Purchase Or..
                </label>
                <SearchInput onChange={() => {}} handleSearch={(v) => handleSearch('purchaseOrderId', v)} placeholder='I - #'/>
            </div>
            <div className="cell" >
                <label className='label-rentals label-rentals-alone'>
                  Order Date
                </label>
            </div>
        </>
    )
}
