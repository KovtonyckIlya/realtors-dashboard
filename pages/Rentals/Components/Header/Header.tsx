import { Col, Row } from "react-bootstrap";
import React, { Dispatch, SetStateAction, useState } from "react";
import { SearchInput } from '../SearchInput/SearchInput'

interface HeaderProps {
    setSearch: any
}

export const Header = (props: HeaderProps) => {
    const { setSearch } = props
    const [currentField, setCurrentField] = useState('')
    const [currentText, setCurrentText] = useState('')

    const onChange = (field: string, text: string) => {
        setCurrentField(field)
        setCurrentText(text)
    }

    const handleChange = () => {
        setSearch({ searchField: currentField, searchText: currentText })
    }
    return (
        <>
            <div className="cell">
                <label className='label-rentals'>
                    Details
                </label>
                <SearchInput onChange={(text) => {
                    onChange('id', text)
                }} handleSearch={(v) => setSearch('details', v)} placeholder='R-#' />
            </div>
            <div className="cell">
                <label className='label-rentals'>
                    Asset
                </label>
                <SearchInput onChange={(text) => {
                    onChange('asset', text)
                }} handleSearch={(v) => setSearch('asset', v)} placeholder='I-#' />
            </div>
            <div className="cell">
                <label className='label-rentals'>
                    Make
                </label>
                <SearchInput onChange={(text) => {
                    onChange('make', text)
                }} handleSearch={(v) => setSearch('make', v)} placeholder='I-#' />
            </div>
            <div className="cell">
                <label className='label-rentals'>
                    Model
                </label>
                <SearchInput onChange={(text) => {
                    onChange('model', text)
                }} handleSearch={(v) => setSearch('model', v)} placeholder='I-#' />
            </div>
            <div className="cell">
                <label className='label-rentals label-rentals-alone'>
                    Date Rented
                </label>
            </div>
            <div className="cell">
                <label className='label-rentals label-rentals-alone'>
                    Date Returned
                </label>
            </div>
        </>
    )
}
