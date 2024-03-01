import { Reservation } from "../Types"

/**
 * An interface to represent a vacation home
 */

export interface IVacationHome {
    /**
     * List of reservations that have been made on the home
     */
    reservations: Reservation[]
    
    /**
     * Method to set a reservation on the home
     * @param name the name of the person reserving
     * @param startDate the start date of the reservation
     * @param endDate the end date of the reservation
     */
    setReservation(name: string, startDate: Date, endDate: Date): void
}