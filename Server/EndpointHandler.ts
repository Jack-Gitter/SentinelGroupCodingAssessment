import { Express } from "express";
import { IVacationHomeManager } from "../Model/Interfaces/IVacationHomeManager";
import { VacationHomeManger } from "../Model/Classes/VacationHomeManager";
import { BEACH_HOUSE_AMNT, CITY_APARTMENT_AMNT, FARM_BARN_AMNT, LAKE_HOUSE_AMNT } from "../Model/Contants";

export default class EndpointHandler {

    app: Express
    vacationHomeManger: IVacationHomeManager

    constructor(app: Express) {
        this.app = app
        this.vacationHomeManger = new VacationHomeManger(BEACH_HOUSE_AMNT, CITY_APARTMENT_AMNT, FARM_BARN_AMNT, LAKE_HOUSE_AMNT)
    }

    setRoutes() {
        this.app.get('/', (req, res) => {
            res.json({"hi": "hi"})
        })

        this.app.post('/reservations', (req, res) => {
            if (!req.body.name) {
                res.status(400).send("You have not provided a valid name")
            }
            if (!req.body.startDate) {
                res.status(400).send("You have not provided a valid start date")
            }
            if (!req.body.endDate) {
                res.status(400).send("You have not provided a valid end date")
            }

            let name = req.body.name
            let startDate = new Date(req.body.date)
            let endDate = new Date(req.body.endDate)


        })
    }
}