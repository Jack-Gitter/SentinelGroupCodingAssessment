import axios from "axios";
import { ReservationResponse } from "../../Model/Types";
/*
export type FailureReason =                                      "Invalid name" |
                                                           "Invalid start date" |
                                                             "Invalid end date" |
                                          "Start date cannot be after end date" |
                                                        "Invalid property type" |
     "Vacation Home does not have a booking available for your requested dates" 

*/
describe('testing the reservations endpoint', () => {
    let instance = axios.create({
        baseURL: "http://localhost:8080",
        timeout: 5000,
    })

    it('responds with an error object if the request is not valid for missing name', () => {
        instance.post('/reservations', {}).then((response) => {}).catch((error): void => {
            expect(error.response.data).toEqual({
                bookingSuccessful: false, 
                reasonForFailure: "Invalid name", 
                startDate: null, 
                endDate: null} )
        })
    })
    it('responds with an error object if the request is not valid for missing/invalid property type', async () => {
        instance.post('/reservations', {name: "Jack Gitter"}).then((response) => {}).catch((error): void => {
            expect(error.response.data).toEqual({
                name: "Jack Gitter",
                bookingSuccessful: false, 
                reasonForFailure: "Invalid property type", 
                startDate: null, 
                endDate: null} )
        })
        instance.post('/reservations', {name: "Jack Gitter", propertyType: "invalid"}).then((response) => {}).catch((error): void => {
            expect(error.response.data).toEqual({
                name: "Jack Gitter",
                bookingSuccessful: false, 
                reasonForFailure: "Invalid property type", 
                startDate: null, 
                endDate: null} )
        })
    })
    it('responds with an error object if the request is not valid for missing end date', async () => {
        instance.post('/reservations', {name: "Jack Gitter", propertyType: "BEACH_HOUSE"}).then((response) => {}).catch((error): void => {
            expect(error.response.data).toEqual({
                name: "Jack Gitter",
                bookingSuccessful: false, 
                reasonForFailure: "Invalid start date", 
                startDate: null, 
                endDate: null} )
        })
    })
    it('responds with an error object if the request is not valid for missing end date', async () => {
        instance.post('/reservations', {name: "Jack Gitter", propertyType: "BEACH_HOUSE", startDate: "2026-02-01"}).then((response) => {}).catch((error): void => {
            expect(error.response.data).toEqual({
                name: "Jack Gitter",
                bookingSuccessful: false, 
                reasonForFailure: "Invalid end date", 
                startDate: '2026-02-01T00:00:00.000Z',
                endDate: null} )
        })
    })
    it('responds with an error object if the request is not valid because all of the houses are booked', async () => {
        await instance.post('/reservations', {name: "Jack Gitter", propertyType: "BEACH_HOUSE", startDate: "2026-02-01", endDate: "2026-03-01"})
        await instance.post('/reservations', {name: "Jack Gitter", propertyType: "BEACH_HOUSE", startDate: "2026-02-01", endDate: "2026-03-01"})
        await instance.post('/reservations', {name: "Jack Gitter", propertyType: "BEACH_HOUSE", startDate: "2026-02-01", endDate: "2026-03-01"})
        await instance.post('/reservations', {name: "Jack Gitter", propertyType: "BEACH_HOUSE", startDate: "2026-02-01", endDate: "2026-03-01"})
        instance.post('/reservations', {name: "Jack Gitter", propertyType: "BEACH_HOUSE", startDate: "2026-02-03", endDate: '2026-02-05'}).then((response) => {}).catch((error): void => {
            expect(error.response.data).toEqual({
                name: "Jack Gitter",
                bookingSuccessful: false, 
                reasonForFailure: "Invalid end date", 
                startDate: '2026-02-01T00:00:00.000Z',
                endDate: '2026-02-05T00:00:00.000Z'})
        })
    })

    it('creates a beach house properly', async () => {
        let resp = await instance.post('/reservations', {name: "Jack Gitter", propertyType: "BEACH_HOUSE", startDate: "2026-02-01", endDate: "2029-03-01"})
        expect(resp.data).toEqual({
            bookingSuccessful: true,
            name: "Jack Gitter",
            startDate: "2026-02-01T00:00:00.000Z",
            endDate: "2029-03-01T00:00:00.000Z",
        })

    })
    it('creates a city apartment properly', async () => {
        let resp = await instance.post('/reservations', {name: "Jack Gitter", propertyType: "CITY_APARTMENT", startDate: "2026-02-01", endDate: "2029-03-01"})
        expect(resp.data).toEqual({
            bookingSuccessful: true,
            name: "Jack Gitter",
            startDate: "2026-02-01T00:00:00.000Z",
            endDate: "2029-03-01T00:00:00.000Z",
        })
    })
    it('creates a lake house properly', async () => {
        let resp = await instance.post('/reservations', {name: "Jack Gitter", propertyType: "LAKE_HOUSE", startDate: "2026-02-01", endDate: "2029-03-01"})
        expect(resp.data).toEqual({
            bookingSuccessful: true,
            name: "Jack Gitter",
            startDate: "2026-02-01T00:00:00.000Z",
            endDate: "2029-03-01T00:00:00.000Z",
        })
    })
    it('creates a farm barn properly', async () => {
        let resp = await instance.post('/reservations', {name: "Jack Gitter", propertyType: "FARM_BARN", startDate: "2026-02-01", endDate: "2029-03-01"})
        expect(resp.data).toEqual({
            bookingSuccessful: true,
            name: "Jack Gitter",
            startDate: "2026-02-01T00:00:00.000Z",
            endDate: "2029-03-01T00:00:00.000Z",
        })
    })
})