import { isDate } from "util/types"
import { doDatesOverlap, isDateValid } from "../../Model/Utilities"

describe('tests for isDateValid utility function', () => {
    it('returns true for just a valid year', () => {
        expect(isDateValid('2025')).toBe(true)
        expect(isDateValid('2026')).toBe(true)
    })
    it('returns true for a valid year and month', () => {
        expect(isDateValid('2024-08')).toBe(true)
        expect(isDateValid('2025-01')).toBe(true)
    })
    it('returns true for a valid year, month, and day date', () => {
        expect(isDateValid('2025-01-01')).toBe(true)
        expect(isDateValid('2026-02-15')).toBe(true)
    })
    it('returns false if the date is before the current date', () => {
        expect(isDateValid('2022-01-01')).toBe(false)
        expect(isDateValid('2022-01')).toBe(false)
        expect(isDateValid('2022')).toBe(false)
    })
    it('returns false if the date is malformatted according to the mozzila documentation', () => {
        expect(isDateValid('2022701911')).toBe(false)
        expect(isDateValid('hello')).toBe(false)
        expect(isDateValid('2022-13-01')).toBe(false)
    })
})

describe('testing doDatesOverlap function', () => {
    let date1 = new Date('2022-01-01')
    let date2 = new Date('2022-01-02')
    let date3 = new Date('2022-01-03')
    let date4 = new Date('2022-01-04')
    it('returns false for non-overlapping dates', () => {
        expect(doDatesOverlap(date1, date3, date2, date4)).toBe(false)
    })

    it('returns true for overlapping dates', () => {
        // second date starts in first date
        expect(doDatesOverlap(date1, date2, date3, date4)).toBe(true)
        // second date ends in first date
        expect(doDatesOverlap(date2, date1, date4, date3)).toBe(true)
        // first date starts in second date
        expect(doDatesOverlap(date2, date1, date4, date3)).toBe(true)
        // first date ends in second date
        expect(doDatesOverlap(date1, date2, date3, date4)).toBe(true)
    })
})