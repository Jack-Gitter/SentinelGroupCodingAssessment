import { start } from "repl";
import { IVacationHome } from "../Interfaces/IVacationHome";
import { IVacationHomeManager } from "../Interfaces/IVacationHomeManager";
import { PropertyType } from "../Types";
import { BeachHouse } from "./BeachHouse";
import { CityApartment } from "./CityApartment";
import { FarmBarn } from "./FarmBarn";
import { LakeHouse } from "./LakeHouse";
import { doDatesOverlap } from "../Utilities";

export class VacationHomeManger implements IVacationHomeManager {

    beachHouses: BeachHouse[];
    cityApartments: CityApartment[];
    farmBarns: FarmBarn[];
    lakeHouses: LakeHouse[];
    
    constructor(beachHouseAmnt: number, cityApartmentAmnt: number, farmBarnAmnt: number, lakeHouseAmnt: number) {
        this.beachHouses = []
        this.cityApartments = []
        this.farmBarns = []
        this.lakeHouses = []
        this.populateVacationHomes(beachHouseAmnt, cityApartmentAmnt, farmBarnAmnt, lakeHouseAmnt)
    }

    bookProperty(name: string, startDate: Date, endDate: Date, type: PropertyType): boolean {
        if (type === 'BEACH_HOUSE') {
            let availableBeachHouse = this.findAvaliableProperty(startDate, endDate, type) as BeachHouse
            availableBeachHouse.setBooking(name, startDate, endDate)
            return true
        } 

        if (type === 'CITY_APARTMENT') {

            return true
        }

        if (type === 'FARM_BARN') {

            return true
        }

        if (type === 'LAKE_HOUSE') {

            return true
        }

        throw new Error("Method not implemented.");
    }

    cancelBooking(name: string, startDate: Date, endDate: Date, type: PropertyType): boolean {
        throw new Error("Method not implemented.");
    }

    private populateVacationHomes(beachHouseAmnt: number, cityApartmentAmnt: number, farmBarnAmnt: number, lakeHouseAmnt: number) {

        for (let i = 0; i < beachHouseAmnt; i++) {
            this.beachHouses.push(new BeachHouse())
        }

        for (let i = 0; i < cityApartmentAmnt; i++) {
            this.cityApartments.push(new CityApartment())
        }

        for (let i = 0; i < farmBarnAmnt; i++) {
            this.farmBarns.push(new FarmBarn())
        }

        for (let i = 0; i < lakeHouseAmnt; i++) {
            this.lakeHouses.push(new LakeHouse())
        }

    }

    private findAvaliableProperty(startDate: Date, endDate: Date, type: PropertyType): IVacationHome {
        if (type === 'BEACH_HOUSE') {

            for (let i = 0; i < this.beachHouses.length; i++) {

                // if the beachouse does not have any current reservations, we can reserve any time
                if (this.beachHouses[i].reservations.length === 0) {
                    return this.beachHouses[i]
                }

                let isValidHouse = true

                // if it does have reservations, try to fit in the current request if possible
                for (let j = 0; j < this.beachHouses[i].reservations.length; j++) {
                    let startDate2 = this.beachHouses[i].reservations[j].startDate
                    let endDate2 = this.beachHouses[i].reservations[j].endDate
                    if (doDatesOverlap(startDate, startDate2, endDate, endDate2)) {
                        isValidHouse = false
                        break
                    }
                }

                if (isValidHouse) {
                    return this.beachHouses[i]
                }

            }

            throw new Error("no available Beach Houses for the requested time slot")

        }

        if (type === 'CITY_APARTMENT') {

        }
        if (type === 'FARM_BARN') {

        }
        if (type === 'LAKE_HOUSE') {

        }
        throw new Error("hi")
    }

}
