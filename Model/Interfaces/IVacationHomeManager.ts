import { PropertyType } from "../Types"
import { BeachHouse } from "../Classes/BeachHouse"
import { CityApartment } from "../Classes/CityApartment"
import { FarmBarn } from "../Classes/FarmBarn"
import { LakeHouse } from "../Classes/LakeHouse"

/**
 * Interface to represent a vacation home manager, which is responsible for creating the reservations for all 
 * different types of vacation homes
 */
export interface IVacationHomeManager {

    beachHouses: BeachHouse[]
    cityApartments: CityApartment[]
    farmBarns: FarmBarn[]
    lakeHouses: LakeHouse[]

    /**
     * reserves a property based on the given type and date range 
     * @param name name of the person reserving
     * @param startDate the start date of the reservation
     * @param endDate the end date of the reservation
     * @param type the type of vacation home to reserve
     */
    reserveProperty(name: string, startDate: Date, endDate: Date, type: PropertyType): boolean 

}