import { FailureReason } from "../Types"

export class ReservationError extends Error {

    fr: FailureReason

    constructor(fr: FailureReason) {
        super(fr)
        this.fr = fr
    }

    failureReason(): FailureReason {
        return this.fr
    }

}