import express, { Express } from "express";
import { IVacationHomeManager } from "../Model/Interfaces/IVacationHomeManager";
import { VacationHomeManger } from "../Model/Classes/VacationHomeManager";
import { BEACH_HOUSE_AMNT, CITY_APARTMENT_AMNT, FARM_BARN_AMNT, LAKE_HOUSE_AMNT } from "../Model/Contants";
import { isPropertyTypeValid } from "../Model/Utilities";
import { isDateValid } from "../Model/Utilities";
import { FailureReason, ReservationResponse } from "../Model/Types";
import { ReservationError } from "../Model/Classes/ReservationError";
import { start } from "repl";

export default class EndpointHandler {

    app: Express
    vacationHomeManger: IVacationHomeManager

    constructor(app: Express) {
        this.app = app
        this.vacationHomeManger = new VacationHomeManger(BEACH_HOUSE_AMNT, CITY_APARTMENT_AMNT, FARM_BARN_AMNT, LAKE_HOUSE_AMNT)
    }


    setRoutes() {

        this.app.get('/', (req, res) => {
            res.send("valid")
        })

        this.app.post('/reservations', (req, res) => {

            let failureReason: FailureReason | null = null

            if (!req.body.name) {
                failureReason = 'Invalid name'
            } else if (!req.body.propertyType || !isPropertyTypeValid(req.body.propertyType)) {
                failureReason = 'Invalid property type'
            } else if (!req.body.startDate || !isDateValid(req.body.startDate)) {
                failureReason = 'Invalid start date'
            } else if (!req.body.endDate || !isDateValid(req.body.endDate)) {
                failureReason = 'Invalid end date'
            }
            
            let name = req.body.name
            let propertyType = req.body.propertyType
            let startDate = new Date(req.body.startDate)
            let endDate = new Date(req.body.endDate)

            if (endDate < startDate) {
                failureReason = 'Start date cannot be after end date'
            }

            if (failureReason) {
                res.status(400).json({
                    bookingSuccessful: false,
                    reasonForFailure: failureReason, 
                    name: name, 
                    startDate: startDate, 
                    endDate: endDate
                } as ReservationResponse)
                return
            }

            try {
                this.vacationHomeManger.bookProperty(name, startDate, endDate, propertyType)
                res.json({bookingSuccessful: true,
                            name: name, 
                            startDate: startDate, 
                            endDate: endDate
                        } as ReservationResponse)
                return
            } catch (e : unknown) {
                if (e instanceof ReservationError) {
                    failureReason = e.failureReason()
                    res.status(400).json({
                        bookingSuccessful: false,
                        reasonForFailure: failureReason, 
                        name: name, 
                        startDate: startDate, 
                        endDate: endDate
                    } as ReservationResponse)
                }
                return
            }

        })
    }
}