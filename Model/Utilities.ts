import { PropertyType } from "./Types"

export function isDateValid(dateString: string): boolean {

    let date = new Date(dateString)
    // also need to check if the date is past today's date !!!
    return date instanceof Date && !isNaN(date.getTime())

}

export function isPropertyTypeValid(propertyType: string) : boolean {
    console.log(propertyType)
    return propertyType === "FARM_BARN" || 
    propertyType ===  "BEACH_HOUSE" ||
    propertyType === "CITY_APARTMENT" || 
    propertyType ==="LAKE_HOUSE"
}