import { IVacationHome } from "../Interfaces/IVacationHome";
import { Reservation } from "../Types";

export class VacationHome implements IVacationHome {

    reservations: Reservation[];

    constructor() {
        this.reservations = []
    }

    setBooking(name: string, startDate: Date, endDate: Date): boolean {
        throw new Error("Method not implemented.");
    }

    cancelBooking(name: string, startDate: Date, endDate: Date): boolean {
        throw new Error("Method not implemented.");
    }

    protected validateBooking(startDate: Date, endDate: Date): boolean {
        return false

    }

}