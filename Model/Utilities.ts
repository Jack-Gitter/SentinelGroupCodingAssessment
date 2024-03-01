import { PropertyType } from "./Types"

/**
 * Checks to see if a date is valid. "valid" in this context means correctly formatted, and is past the current date and time
 * @param dateString the date string provided by the API call
 * @returns true if the date string is valid, false otherwise
 */
export function isDateValid(dateString: string): boolean {

    let date = new Date(dateString)
    let currentDate = new Date()
    // also need to check if the date is past today's date !!!
    return (date instanceof Date && !isNaN(date.getTime())) && date >= currentDate

}

/**
 * checks a type
 * @param propertyType string representing property
 * @returns true if propertyType is of type PropertyType, false otherwise
 */
export function isPropertyTypeValid(propertyType: string) : boolean {
    return propertyType === "FARM_BARN" || 
    propertyType ===  "BEACH_HOUSE" ||
    propertyType === "CITY_APARTMENT" || 
    propertyType ==="LAKE_HOUSE"
}

/**
 * checks if two dates overlap eachother
 * @param startDate1 
 * @param startDate2 
 * @param endDate1 
 * @param endDate2 
 * @returns true if the dates are overlapping in any way, and false otherwise
 */
export function doDatesOverlap(startDate1: Date, startDate2: Date, endDate1: Date, endDate2: Date) {
        return (startDate1 <= startDate2 &&  startDate2 <= endDate1) ||  
        (startDate1 <= endDate2   && endDate2 <= endDate1) ||
        (startDate2 <  startDate1 && endDate1 < endDate2)
}