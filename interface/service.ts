
export interface IService {
    id: string
    asset: string | null
    make: string | null
    model: string
    serial: string | null
    calibrateDate: Date
    calibrateDue: Date
    technician: string
}
