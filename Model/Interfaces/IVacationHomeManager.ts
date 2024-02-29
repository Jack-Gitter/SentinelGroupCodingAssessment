import { IVacationHome } from "./IVacationHome"

export interface IVacationHomeManager {

    beachHouses: IVacationHome[]
    cityApartments: IVacationHome[]
    farmbarn: IVacationHome[]
    lakeHouse: IVacationHome[]

    bookProperty(name: string, startDate: Date, endDate: Date): boolean
    cancelBooking(name: string, startDate: Date, endDate: Date): boolean

}