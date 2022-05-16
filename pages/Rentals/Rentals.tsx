import React, {useEffect, useState} from 'react'
import {Card, Col, Container, Row} from "react-bootstrap";
import './style.scss'
import {Header} from "./Components/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {IRootReducer} from "../../redux/rootReducer";
import {getRentalsRequest} from "../../redux/rentals/actions";
import {INewRental, IRental} from "../../interface/rental";
import {Rental} from "./Components/Rental/Rental";
import {getSalesRequest} from "../../redux/sales/actions";
import ReactPaginate from "react-paginate";
import LoginIcon from "../../components/SVG/LoginIcon";
import PreviousIcon from "../../components/SVG/PreviousIcon";
import NextIcon from "../../components/SVG/NextIcon";
import {IService} from "../../interface/service";

const Items: React.FC<{currentItems: IRental[] | null}> = ({ currentItems }) => {
    return (
      <>
          {currentItems &&
          currentItems.map((rental: any ) => (
            <div className={`rental-list-item rental-item-wrapper` }>
                <Rental rental={rental}/>
            </div>
          ))}
      </>
    );
}


export const Rentals: React.FC<{itemsPerPage: number}> = ({ itemsPerPage}) => {
    const dispatch = useDispatch()
    const [itemOffset, setItemOffset] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [currentItems, setCurrentItems] = useState<IRental[] | null>(null)
    const {rentals, rentalsCount} = useSelector((store: IRootReducer) => store.rentalsInfo)

    const handleGetRentals = async () => {
        await dispatch(getRentalsRequest(1))
    };

    useEffect(() => {
        handleGetRentals();
    }, []);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(rentals.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(rentals.length / itemsPerPage));
    }, [rentals, itemOffset, itemsPerPage])


    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % rentals.length;
        setItemOffset(newOffset);
    };

    const handleSearch = (type: string, value: string) => {
        const filter = JSON.stringify({
            field: type,
            value
        })

        dispatch(getRentalsRequest(1, filter))
    }


    return (
        <div className={'content'}>
            <div className={'page-header'}>
                <LoginIcon />
                <h3 className={'page-header-name'}>
                    Rentals
                </h3>
            </div>
            <Col md={12}>
                <div className='rentals-table'>
                    <div>
                        <div className='table-header'>
                            <Header setSearch={handleSearch}/>
                        </div>
                        <Items currentItems={currentItems} />
                        <ReactPaginate
                            className={'pagination-wrapper'}
                            breakLabel="..."
                            nextLabel={<NextIcon className={'next'} />}
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel={<PreviousIcon className={'previous'}  />}
                        />
                    </div>
                </div>
            </Col>
        </div>
    )
}
