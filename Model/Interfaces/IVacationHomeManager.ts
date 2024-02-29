import { IVacationHome } from "./IVacationHome"
import { PropertyType } from "../Types"

export interface IVacationHomeManager {

    beachHouses: IVacationHome[]
    cityApartments: IVacationHome[]
    farmBarn: IVacationHome[]
    lakeHouse: IVacationHome[]

    bookProperty(name: string, startDate: Date, endDate: Date, type: PropertyType): boolean
    cancelBooking(name: string, startDate: Date, endDate: Date, type: PropertyType): boolean

}