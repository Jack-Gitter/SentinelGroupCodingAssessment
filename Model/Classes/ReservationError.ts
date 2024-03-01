import { FailureReason } from "../Types"

/**
 * A class to represent a custom error which is caused by invalid API requests
 */
export class ReservationError extends Error {

    fr: FailureReason

    constructor(fr: FailureReason) {
        super(fr)
        this.fr = fr
    }

    /**
     * 
     * @returns the specific failure reason for not being able to book a vacation home
     */
    failureReason(): FailureReason {
        return this.fr
    }

}