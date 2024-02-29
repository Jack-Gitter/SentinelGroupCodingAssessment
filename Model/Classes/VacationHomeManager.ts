import { IVacationHome } from "../Interfaces/IVacationHome";
import { IVacationHomeManager } from "../Interfaces/IVacationHomeManager";
import { PropertyType } from "../Types";

export class VacationHomeManger implements IVacationHomeManager {

    beachHouses: IVacationHome[];
    cityApartments: IVacationHome[];
    farmBarn: IVacationHome[];
    lakeHouse: IVacationHome[];
    
    constructor() {

        this.beachHouses = []
        this.cityApartments = []
        this.farmBarn = []
        this.lakeHouse = []
    }

    bookProperty(name: string, startDate: Date, endDate: Date, type: PropertyType): boolean {
        throw new Error("Method not implemented.");
    }

    cancelBooking(name: string, startDate: Date, endDate: Date, type: PropertyType): boolean {
        throw new Error("Method not implemented.");
    }

    private populateBeachHouses() {

    }
    private populateCityApartments() {

    }
    private populateFarmBarns() {

    }
    private populateLakeHouses() {

    }
}
