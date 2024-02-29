import { IVacationHome } from "../Interfaces/IVacationHome";
import { IVacationHomeManager } from "../Interfaces/IVacationHomeManager";

class VacationHomeManger implements IVacationHomeManager {

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

    bookProperty(name: string, startDate: Date, endDate: Date): boolean {
        throw new Error("Method not implemented.");
    }

    cancelBooking(name: string, startDate: Date, endDate: Date): boolean {
        throw new Error("Method not implemented.");
    }
}
