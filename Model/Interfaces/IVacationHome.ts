import { Reservation } from "../Types"

export interface IVacationHome {
    reservations: Reservation[]
    setBooking(name: string, startDate: Date, endDate: Date): void
    cancelBooking(name: string, startDate: Date, endDate: Date): void
}