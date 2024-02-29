import express from 'express'
import EndpointHandler from './EndpointHandler'

const PORT = 8080
const app = express()

app.use(express.json())

const endpointHandler = new EndpointHandler(app)

endpointHandler.setRoutes()

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})