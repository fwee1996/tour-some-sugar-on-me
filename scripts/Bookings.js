import { getBookings, getBands, getVenues } from "./database.js"
const allBookings=getBookings()
const allBands=getBands()
const allVenues=getVenues()

//Find band for booking
export const findBand = (booking, allBands) => {
    let bookingBand = null
    for (const band of allBands) {
        if (band.id === booking.bandId) {
            bookingBand = band.name
            break // Exit the loop once the product is found
        }
    }
    return bookingBand
}

//Find venue for booking
export const findVenue = (booking, allVenues) => {
    let bookingVenue = null
    for (const venue of allVenues) {
        if (venue.id === booking.venueId) {
            //correction: employee.name instead of the whole employee object
            bookingVenue = venue.name
            break // Exit the loop once the employee is found
        }
    }
    return bookingVenue
}

//Book 3- column 4 - Layout and ERD
//this eventListener displays window alert that shows all of the band information 
//(name, genre, year formed, number of members).

// Example Booking Alert Text:
// Rocket Pumpkins
// EDM
// Formed in 2005
// 3 band members
document.addEventListener(
    "click",
    (clickEvent)=>{
        const itemClicked=clickEvent.target
        if (itemClicked.dataset.type==="booking"){
             const bookingBandId =itemClicked.dataset.bandid
             for (const band of allBands) {
                 if (band.id === parseInt(bookingBandId)) {
              window.alert(`${band.name}\n${band.genre}\nFormed in ${band.yearEstablished}\n${band.memberCount} band members`)
            }
         }
        }
    }
    
    )

export const BookingList = ()=>{
let html="<ul>"
for (const booking of allBookings){

    const venue = findVenue(booking, allVenues)
    const band = findBand(booking, allBands)

html+=`<li data-type="booking" data-id="${booking.id}" data-bandId="${booking.bandId}" data-venueId="${booking.venueId}">${band} are playing at ${venue} on ${new Date(booking.timestamp).toLocaleDateString()}</li>`
}
html+="</ul>"
return html
}

//output:
//Rocket Pumpkins are playing at The Cellar Moss on 12/13/2023

