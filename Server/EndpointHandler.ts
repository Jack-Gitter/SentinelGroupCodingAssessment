import { Express } from "express";

export default class EndpointHandler {

    app: Express

    constructor(app: Express) {
        this.app = app
    }

    setRoutes() {
        this.app.get('/', (req, res) => {
            res.json({"hi": "hi"})
        })
    }
}