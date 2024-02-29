import { PropertyType } from "./Types"

export function isDateValid(dateString: string): boolean {

    let date = new Date(dateString)
    // also need to check if the date is past today's date !!!
    return date instanceof Date && !isNaN(date.getTime())

}

export function isPropertyTypeValid(propertyType: string) : boolean {
    return propertyType === "FARM_BARN" || 
    propertyType ===  "BEACH_HOUSE" ||
    propertyType === "CITY_APARTMENT" || 
    propertyType ==="LAKE_HOUSE"
}

export function doDatesOverlap(startDate1: Date, startDate2: Date, endDate1: Date, endDate2: Date) {
        return (startDate1 <= startDate2 &&  startDate2 <= endDate1) ||  
        (startDate1 <= endDate2   && endDate2 <= endDate1) ||
        (startDate2 <  startDate1 && endDate1 < endDate2)
}