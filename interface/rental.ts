import {IAddress} from "./common";

export interface IRental {
    id: string
    equipments: Array<IEquipment>
    rentedDate: Date
    returnedDate: Date
    details: IRentalDetails
}
export interface INewRental
{
    details:number

    asset:string

    make:string

    model:string

    date_rented:Date

    date_returned:Date
}
export interface IEquipment {
    brand: IBrand
    equipmentRented: IEquipmentRented
}
export interface IBrand {
    id: string
    title: string
    description: string
    asset: string
    make: string
}

export interface IRentalDetails {
    info: IRentalInfo
    billing: IAddress
    shipping: IAddress
    dates: IRentalDates

}

export interface IRentalInfo {
    company: string
    contract: string
    attention: string
    po?: string
    phone: string
    fax?: string
    email: string
    secondEmail?: string
}

export interface IRentalDates {
    ordered: Date
    required: Date
    shipped: Date
    returned: Date
}
export interface IEquipmentRented {
    brand: IBrand
    certificate?: string | null
    rentedDate: Date
    returnedDate: Date
}

