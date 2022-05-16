import React, {useState} from 'react'
import {Card, Col, Pagination, Row} from "react-bootstrap";
import ReactPaginate from 'react-paginate';
import {Header} from "./Components/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {IRootReducer} from "../../redux/rootReducer";
import {getSalesRequest} from "../../redux/sales/actions";
import {ISale} from "../../interface/sale";
import {SaleItem} from "./Components/SaleItem/SaleItem";
import './style.scss'
import LoginIcon from "../../components/SVG/LoginIcon";

import NextIcon from "../../components/SVG/NextIcon";
import PreviousIcon from "../../components/SVG/PreviousIcon";
import {IRental} from "../../interface/rental";

const Items: React.FC<{currentItems: ISale[] | null}> = ({ currentItems }) => {
    return (
      <>
          {currentItems &&
          currentItems.map((sale: any) => (
            <div className={`rental-list-item`}>
                <SaleItem sale={sale}/>
            </div>
          ))}
      </>
    );
}


export const Sales: React.FC<{itemsPerPage: number}> = ({ itemsPerPage}) => {
    const dispatch = useDispatch()
    const [itemOffset, setItemOffset] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [currentItems, setCurrentItems] = useState<ISale[] | null>(null)
    const {sales} = useSelector((store: IRootReducer) => store.salesInfo)

    const handleGetSales = async () => {
        await dispatch(getSalesRequest(1))
    };

    React.useEffect(() => {
        handleGetSales();
    }, []);

    React.useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(sales.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(sales.length / itemsPerPage));
    }, [sales, itemOffset, itemsPerPage])

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % sales.length;
        setItemOffset(newOffset);
    };

    const handleSearch = (type: string, value: string) => {
        const filter = JSON.stringify({
            field: type,
            value
        })

        dispatch(getSalesRequest(1, filter))
    }

    return (
        <div className={'content'}>
            <div className={'page-header'}>
                <LoginIcon />
                <h3 className={'page-header-name'}>
                    Sales
                </h3>
            </div>
            <Col md={12}>
                <div className='sales-table'>
                    <div>
                        <div className='table-header'>
                            <Header handleSearch={handleSearch}/>
                        </div>
                        <Items currentItems={currentItems} />
                        <ReactPaginate
                            className={'pagination-wrapper'}
                            breakLabel="..."
                            nextLabel={<NextIcon className='next' />}
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel={<PreviousIcon className='previous' />}
                        />
                    </div>
                </div>
            </Col>
        </div>
    )
}
