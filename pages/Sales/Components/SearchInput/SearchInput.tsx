import {Form} from "react-bootstrap";
import React, {useState} from "react";
import {Search} from "react-bootstrap-icons";

interface SearchInputProps {
    placeholder: string,
    handleSearch: (value: string) => void,
    onChange: (value: string) => void

}

export const SearchInput = ({placeholder, handleSearch, onChange}: SearchInputProps) => {
    const [value, setValue] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const value = e.target.value;
        onChange(value)
        setValue(value)
    }
    return (
        <div className={'flex-row flex-center'} style={{maxWidth: 200}}>
          <Form.Group>
            <Form.Control
              className='rentals-input'
              placeholder={placeholder}
              type="email"
              onChange={handleChange}
            />
          </Form.Group>
        </div>
    )
}
