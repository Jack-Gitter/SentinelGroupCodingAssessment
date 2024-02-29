import { IVacationHome } from "../Interfaces/IVacationHome";
import { Reservation } from "../Types";

export class VacationHome implements IVacationHome {

    reservations: Reservation[];

    constructor() {
        this.reservations = []
    }

    setBooking(name: string, startDate: Date, endDate: Date): void {
        this.reservations.push({name, startDate, endDate} as Reservation)
    }

    cancelBooking(name: string, startDate: Date, endDate: Date): void {
        throw new Error("Method not implemented.");
    }

    protected validateBooking(startDate: Date, endDate: Date): boolean {
        return false

    }

}