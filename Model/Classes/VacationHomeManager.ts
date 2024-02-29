import { IVacationHomeManager } from "../Interfaces/IVacationHomeManager";
import { PropertyType } from "../Types";
import { BeachHouse } from "./BeachHouse";
import { CityApartment } from "./CityApartment";
import { FarmBarn } from "./FarmBarn";
import { LakeHouse } from "./LakeHouse";

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

}
