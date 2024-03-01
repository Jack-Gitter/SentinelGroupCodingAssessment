/**
 * Represents a reservation that a user might make
 */
export type Reservation = {
    name: String,
    startDate: Date
    endDate: Date
}

/**
 * The different types of properties available
 */ 
export type PropertyType = "FARM_BARN" | "BEACH_HOUSE" | "CITY_APARTMENT" | "LAKE_HOUSE"

/**
 * A response to an API call
 */
export type ReservationResponse = {
    bookingSuccessful: boolean
    reasonForFailure?: FailureReason 
    name: string
    startDate: Date
    endDate: Date
}

/**
 * Different reasons an API call might fail
 */
export type FailureReason =                                      "Invalid name" |
                                                           "Invalid start date" |
                                                             "Invalid end date" |
                                          "Start date cannot be after end date" |
                                                        "Invalid property type" |
     "Vacation Home does not have a booking available for your requested dates" 
