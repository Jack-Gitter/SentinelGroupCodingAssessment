import { IVacationHome } from "./IVacationHome"
import { PropertyType } from "../Types"
import { BeachHouse } from "../Classes/BeachHouse"
import { CityApartment } from "../Classes/CityApartment"
import { FarmBarn } from "../Classes/FarmBarn"
import { LakeHouse } from "../Classes/LakeHouse"

export interface IVacationHomeManager {

    beachHouses: BeachHouse[]
    cityApartments: CityApartment[]
    farmBarns: FarmBarn[]
    lakeHouses: LakeHouse[]

    bookProperty(name: string, startDate: Date, endDate: Date, type: PropertyType): boolean | Error

}