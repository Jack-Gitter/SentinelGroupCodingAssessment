import { VacationHome } from "../../Model/Classes/VacationHome"

describe('Testing VacationHome setBooking method', () => {
    it('adds the reservation to the reservations array', () => {

        let vacationHome = new VacationHome()
        let startDate = new Date('2025-01-01')
        let endDate = new Date('2025-02-01')

        vacationHome.setReservation("Jack Gitter", startDate, endDate)
        expect(vacationHome.reservations.length).toBe(1)
        expect(vacationHome.reservations[0].name).toBe("Jack Gitter")
        expect(vacationHome.reservations[0].startDate).toEqual(startDate)
        expect(vacationHome.reservations[0].endDate).toEqual(endDate)

    })
})