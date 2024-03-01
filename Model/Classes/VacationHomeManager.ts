import { start } from "repl";
import { IVacationHome } from "../Interfaces/IVacationHome";
import { IVacationHomeManager } from "../Interfaces/IVacationHomeManager";
import { PropertyType } from "../Types";
import { BeachHouse } from "./BeachHouse";
import { CityApartment } from "./CityApartment";
import { FarmBarn } from "./FarmBarn";
import { LakeHouse } from "./LakeHouse";
import { doDatesOverlap } from "../Utilities";
import { ReservationError } from "./ReservationError";

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

    reserveProperty(name: string, startDate: Date, endDate: Date, type: PropertyType): boolean {
        if (type === 'BEACH_HOUSE') {
            let availableBeachHouse = this.findAvaliableProperty(startDate, endDate, type) as BeachHouse
            availableBeachHouse.setReservation(name, startDate, endDate)
            return true
        } 

        if (type === 'CITY_APARTMENT') {
            let availableCityApartment = this.findAvaliableProperty(startDate, endDate, type) as CityApartment
            availableCityApartment.setReservation(name, startDate, endDate)
            return true
        }

        if (type === 'FARM_BARN') {
            let availableFarmBarn = this.findAvaliableProperty(startDate, endDate, type) as FarmBarn
            availableFarmBarn.setReservation(name, startDate, endDate)
            return true
        }

        if (type === 'LAKE_HOUSE') {
            let availableLakeHouse = this.findAvaliableProperty(startDate, endDate, type) as LakeHouse
            availableLakeHouse.setReservation(name, startDate, endDate)
            return true
        }
        throw new ReservationError('Vacation Home does not have a booking available for your requested dates');
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

    private checkAvailibility(vacationHomes: IVacationHome[], startDate: Date, endDate: Date): IVacationHome {
            for (let i = 0; i < vacationHomes.length; i++) {
                if (vacationHomes[i].reservations.length === 0) {
                    return vacationHomes[i]
                }

                let isValidVacationHome = true
                for (let j = 0; j < vacationHomes[i].reservations.length; j++) {
                    let startDate2 = vacationHomes[i].reservations[j].startDate
                    let endDate2 = vacationHomes[i].reservations[j].endDate
                    if (doDatesOverlap(startDate, startDate2, endDate, endDate2)) {
                        isValidVacationHome = false
                        break
                    }
                }
                if (isValidVacationHome) {
                    return vacationHomes[i]
                }
            }
            throw new ReservationError('Vacation Home does not have a booking available for your requested dates')
    }
    private findAvaliableProperty(startDate: Date, endDate: Date, type: PropertyType): IVacationHome {

        if (type === 'BEACH_HOUSE') {
            return this.checkAvailibility(this.beachHouses, startDate, endDate)
        }

        if (type === 'CITY_APARTMENT') {
            return this.checkAvailibility(this.cityApartments, startDate, endDate)
        }

        if (type === 'FARM_BARN') {
            return this.checkAvailibility(this.farmBarns, startDate, endDate)
        }

        if (type === 'LAKE_HOUSE') {
            return this.checkAvailibility(this.lakeHouses, startDate, endDate)
        }

        throw new ReservationError('Vacation Home does not have a booking available for your requested dates')
    }

}
