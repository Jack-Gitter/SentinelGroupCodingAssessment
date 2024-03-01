import { FarmBarn } from "../../Model/Classes/FarmBarn";
import { LakeHouse } from "../../Model/Classes/LakeHouse";
import { VacationHomeManger } from "../../Model/Classes/VacationHomeManager"
import { BEACH_HOUSE_AMNT, CITY_APARTMENT_AMNT, FARM_BARN_AMNT, LAKE_HOUSE_AMNT } from "../../Model/Contants"
import { IVacationHomeManager } from "../../Model/Interfaces/IVacationHomeManager";

describe('Testing the VacationHomeManager class functionality', () => {

    let vacationHomeManager: IVacationHomeManager;
    let startDate: Date;
    let endDate: Date;

    beforeEach(() => {
        vacationHomeManager = new VacationHomeManger(BEACH_HOUSE_AMNT, CITY_APARTMENT_AMNT, FARM_BARN_AMNT, LAKE_HOUSE_AMNT)
        startDate = new Date('2025-01-01')
        endDate = new Date('2025-02-01')
    })

    it('books a beach house properly', () => {
        let res = vacationHomeManager.bookProperty("Jack Gitter", startDate, endDate, "BEACH_HOUSE")
        expect(res).toBe(true)

        expect(vacationHomeManager.beachHouses[0].reservations).toHaveLength(1)
        expect(vacationHomeManager.beachHouses[0].reservations[0].name).toBe("Jack Gitter")
        expect(vacationHomeManager.beachHouses[0].reservations[0].startDate).toEqual(startDate)
        expect(vacationHomeManager.beachHouses[0].reservations[0].endDate).toEqual(endDate)

        for (const cityApt of vacationHomeManager.cityApartments) {
            expect(cityApt.reservations).toHaveLength(0)
        }
        for (const lakeHouse of vacationHomeManager.lakeHouses) {
            expect(lakeHouse.reservations).toHaveLength(0)
        }
        for (const farmBarn of vacationHomeManager.farmBarns) {
            expect(farmBarn.reservations).toHaveLength(0)
        }
    })
    it('books a lake house properly', () => {
        let res = vacationHomeManager.bookProperty("Jack Gitter", startDate, endDate, "LAKE_HOUSE")
        expect(res).toBe(true)

        expect(vacationHomeManager.lakeHouses[0].reservations).toHaveLength(1)
        expect(vacationHomeManager.lakeHouses[0].reservations[0].name).toBe("Jack Gitter")
        expect(vacationHomeManager.lakeHouses[0].reservations[0].startDate).toEqual(startDate)
        expect(vacationHomeManager.lakeHouses[0].reservations[0].endDate).toEqual(endDate)

        for (const cityApt of vacationHomeManager.cityApartments) {
            expect(cityApt.reservations).toHaveLength(0)
        }
        for (const beachHouse of vacationHomeManager.beachHouses) {
            expect(beachHouse.reservations).toHaveLength(0)
        }
        for (const farmBarn of vacationHomeManager.farmBarns) {
            expect(farmBarn.reservations).toHaveLength(0)
        }
    })
    it('books a farm barn house properly', () => {
        let res = vacationHomeManager.bookProperty("Jack Gitter", startDate, endDate, "FARM_BARN")
        expect(res).toBe(true)

        expect(vacationHomeManager.farmBarns[0].reservations).toHaveLength(1)
        expect(vacationHomeManager.farmBarns[0].reservations[0].name).toBe("Jack Gitter")
        expect(vacationHomeManager.farmBarns[0].reservations[0].startDate).toEqual(startDate)
        expect(vacationHomeManager.farmBarns[0].reservations[0].endDate).toEqual(endDate)

        for (const cityApt of vacationHomeManager.cityApartments) {
            expect(cityApt.reservations).toHaveLength(0)
        }
        for (const lakeHouse of vacationHomeManager.lakeHouses) {
            expect(lakeHouse.reservations).toHaveLength(0)
        }
        for (const beachHouse of vacationHomeManager.beachHouses) {
            expect(beachHouse.reservations).toHaveLength(0)
        }
    })
    it('books a city apartment house properly', () => {
        let res = vacationHomeManager.bookProperty("Jack Gitter", startDate, endDate, "CITY_APARTMENT")
        expect(res).toBe(true)

        expect(vacationHomeManager.cityApartments[0].reservations).toHaveLength(1)
        expect(vacationHomeManager.cityApartments[0].reservations[0].name).toBe("Jack Gitter")
        expect(vacationHomeManager.cityApartments[0].reservations[0].startDate).toEqual(startDate)
        expect(vacationHomeManager.cityApartments[0].reservations[0].endDate).toEqual(endDate)

        for (const beachHouse of vacationHomeManager.beachHouses) {
            expect(beachHouse.reservations).toHaveLength(0)
        }
        for (const lakeHouse of vacationHomeManager.lakeHouses) {
            expect(lakeHouse.reservations).toHaveLength(0)
        }
        for (const farmBarn of vacationHomeManager.farmBarns) {
            expect(farmBarn.reservations).toHaveLength(0)
        }
    })

    it('throws an error if there is a reservation conflict', () => {
        vacationHomeManager = new VacationHomeManger(1, CITY_APARTMENT_AMNT, FARM_BARN_AMNT, LAKE_HOUSE_AMNT)
        vacationHomeManager.bookProperty("Jack Gitter", startDate, endDate, "BEACH_HOUSE")
        expect(() => vacationHomeManager.bookProperty("Jack Gitter", startDate, endDate, "BEACH_HOUSE")).toThrow()
    })

})