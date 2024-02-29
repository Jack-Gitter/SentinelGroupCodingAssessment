import { PropertyType } from "./Types"

export function isDateValid(dateString: string): boolean {

    let date = new Date(dateString)
    return date instanceof Date && isNaN(date.getTime())

}

export function isPropertyTypeValid(propertyType: string) : boolean {
    return propertyType === "FARM_BARN" || 
    propertyType ===  "BEACH_HOUSE" ||
    propertyType === "CITY_APARTMENT" || 
    propertyType ==="LAKE_HOUSE"


}