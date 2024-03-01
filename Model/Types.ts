export type Reservation = {
    name: String,
    startDate: Date
    endDate: Date
}

export type PropertyType = "FARM_BARN" | "BEACH_HOUSE" | "CITY_APARTMENT" | "LAKE_HOUSE"

export type ReservationResponse = {
    bookingSuccessful: boolean
    reasonForFailure: FailureReason | null
    name: string
    startDate: Date
    endDate: Date
}

export type FailureReason =                                      "Invalid name" |
                                                           "Invalid start date" |
                                                             "Invalid end date" |
                                          "Start date cannot be after end date" |
                                                        "Invalid property type" |
     "Vacation Home does not have a booking available for your requested dates" 
