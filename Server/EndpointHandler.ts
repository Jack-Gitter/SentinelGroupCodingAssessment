import { Express } from "express";
import { IVacationHomeManager } from "../Model/Interfaces/IVacationHomeManager";
import { VacationHomeManger } from "../Model/Classes/VacationHomeManager";
import { BEACH_HOUSE_AMNT, CITY_APARTMENT_AMNT, FARM_BARN_AMNT, LAKE_HOUSE_AMNT } from "../Model/Contants";
import { isPropertyTypeValid } from "../Model/Utilities";
import { isDateValid } from "../Model/Utilities";

export default class EndpointHandler {

    app: Express
    vacationHomeManger: IVacationHomeManager

    constructor(app: Express) {
        this.app = app
        this.vacationHomeManger = new VacationHomeManger(BEACH_HOUSE_AMNT, CITY_APARTMENT_AMNT, FARM_BARN_AMNT, LAKE_HOUSE_AMNT)
    }

    setRoutes() {

        this.app.get('/', (req, res) => {
        })

        this.app.post('/reservations', (req, res) => {

            if (!req.body.name) {
                res.status(400).send("You have not provided a valid name")
            }
            if (req.body.propertyType || !isPropertyTypeValid(req.body.propertyType)) {
                res.status(400).send("You have not provided a valid property type")
            }
            if (!req.body.startDate || !isDateValid(req.body.startDate)) {
                res.status(400).send("You have not provided a valid start date")
            }
            if (!req.body.endDate || isDateValid(req.body.endDate)) {
                res.status(400).send("You have not provided a valid end date")
            }

            let name = req.body.name
            let propertyType = req.body.propertyType
            let startDate = new Date(req.body.date)
            let endDate = new Date(req.body.endDate)

            if (endDate < startDate) {
                res.status(400).send("End date cannot be before start date")
            }

            let resp = this.vacationHomeManger.bookProperty(name, startDate, endDate, propertyType)

            if (resp instanceof Error) {
                res.status(400).send(resp.message)
            }

            res.send('reservation successful')
        })
    }
}