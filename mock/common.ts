import {IUser} from "../interface/user";
import {IRental} from "../interface/rental";


export const usersMockList: Array<IUser> = [
    {
        id: '1',
        name: 'Ian Miller',
        email: 'imiller@accutech.ca',
        password: 'passworddddd',
        role: 'user'
    },
    {
        id: '2',
        name: 'Miller Miller',
        email: 'imiller@accutech+2.ca',
        password: 'passworddddd2',
        role: 'user'
    },
    {
        id: '3',
        name: 'Ian Ian',
        email: 'imiller@accutech+3.ca',
        password: 'passworddddd3',
        role: 'user'
    },
    {
        id: '4',
        name: 'Miller Ian',
        email: 'imiller@accutech+4.ca',
        password: 'passworddddd4',
        role: 'user'
    }]


export const rentalsMockList: Array<IRental> = [

    {
        id: '1',
        rentedDate: new Date(),
        returnedDate: new Date(),
        details: {
            info: {
                company: 'company',
                contract: 'contract contract contract',
                attention: 'attention',
                po: 'po',
                phone: 'phone phone phone',
                fax: 'fax fax',
                email: 'email email email',
                secondEmail: 'secondEmail',
            },
            shipping: {
                address: 'address',
                city: 'city',
                province: 'province',
                country: 'country',
                postalCode: 'postalCode',
            },
            billing: {
                address: 'address',
                city: 'city',
                province: 'province',
                country: 'country',
                postalCode: 'postalCode',
            },
            dates: {
                required: new Date(),
                ordered: new Date(),
                returned: new Date(),
                shipped: new Date(),
            },
        }, equipments: [
            {
                brand: {
                    id: '23',
                    description: 'desc',
                    title: 'sd',
                    asset: 'I-2G58GJ',
                    make: 'AEMC',
                },
                equipmentRented: {
                    brand: {
                        id: '23',
                        description: 'desc',
                        title: 'sd',
                        asset: 'I-2G58GJ',
                        make: 'AEMC',
                    },
                    certificate: 'ss',
                    rentedDate: new Date(),
                    returnedDate: new Date()
                }
            },
            {
                brand: {
                    id: '23',
                    description: 'desc',
                    title: 'sd',
                    asset: 'I-2G58GJ',
                    make: 'AEMC',
                },
                equipmentRented: {
                    brand: {
                        id: '23',
                        description: 'desc',
                        title: 'sd',
                        asset: 'I-2G58GJ',
                        make: 'AEMC',
                    },
                    certificate: '',
                    rentedDate: new Date(),
                    returnedDate: new Date()
                }
            },
            {
                brand: {
                    id: '23',
                    description: 'desc',
                    title: 'sd',
                    asset: 'I-2G58GJ',
                    make: 'AEMC',
                },
                equipmentRented: {
                    brand: {
                        id: '23',
                        description: 'desc',
                        title: 'sd',
                        asset: 'I-2G58GJ',
                        make: 'AEMC',
                    },
                    certificate: 'ss',
                    rentedDate: new Date(),
                    returnedDate: new Date()
                }
            },

        ]
    },
    {
        id: '1',
        rentedDate: new Date(),
        returnedDate: new Date(),
        details: {
            info: {
                company: 'string',
                contract: 'string',
                attention: 'string',
                po: 'string',
                phone: 'string',
                fax: 'string',
                email: 'string',
                secondEmail: 'string',
            },
            shipping: {
                address: 'string',
                city: 'string',
                province: 'string',
                country: 'string',
                postalCode: 'string',
            },
            billing: {
                address: 'string',
                city: 'string',
                province: 'string',
                country: 'string',
                postalCode: 'string',
            },
            dates: {
                required: new Date(),
                ordered: new Date(),
                returned: new Date(),
                shipped: new Date(),
            },
        }, equipments: [
            {
                brand: {
                    id: '23',
                    description: 'desc',
                    title: '2G58GJ',
                    asset: 'I-2G58GJ',
                    make: 'AEMC',
                },
                equipmentRented: {
                    brand: {
                        id: '23',
                        description: 'desc',
                        title: '2G58GJ',
                        asset: 'I-2G58GJ',
                        make: 'AEMC',
                    },
                    certificate: 'ss',
                    rentedDate: new Date(),
                    returnedDate: new Date()
                }
            },
            {
                brand: {
                    id: '23',
                    description: 'desc',
                    title: '2G58GJ',
                    asset: 'I-2G58GJ',
                    make: 'AEMC',
                },
                equipmentRented: {
                    brand: {
                        id: '23',
                        description: 'desc',
                        title: '2G58GJ',
                        asset: 'I-2G58GJ',
                        make: 'AEMC',
                    },
                    certificate: '',
                    rentedDate: new Date(),
                    returnedDate: new Date()
                }
            },
            {
                brand: {
                    id: '23',
                    description: 'description vdescriptionм description description м',
                    title: '2G58GJ',
                    asset: 'I-2G58GJ',
                    make: 'AEMC',
                },
                equipmentRented: {
                    brand: {
                        id: '23',
                        description: 'desc',
                        title: 'sd',
                        asset: 'I-2G58GJ',
                        make: 'AEMC',
                    },
                    certificate: 'ss',
                    rentedDate: new Date(),
                    returnedDate: new Date()
                }
            },

        ]
    },
]


export const currentUserMock: IUser = {
    id: '10',
    name: 'Miller Miller',
    email: 'imiller@accutech+2.ca',
    password: 'passworddddd2',
    role: 'admin',
    currentRole: 'admin'
}
