import { getVenues, getBands, getBookings } from "./database.js"
import {  findBand } from "./Bookings.js"
const allVenues=getVenues()
const allBookings=getBookings()
const allBands=getBands()

//When a venue name is clicked, 
//window alert displays all of the bands that have booked the venue.

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        const venueId = itemClicked.dataset.id

        if (itemClicked.dataset.type === "venue") {

            let BandListForVenue = [] // Make array inside the click event listener!!!

            //check if booking venue id==venue.id if so push the band associated with the booking
            for (const booking of allBookings) {
                if (booking.venueId === parseInt(venueId)) {
                    //findBand() function imported from Bookings.js
                    const band = findBand(booking, allBands)
                    BandListForVenue.push(band)
                }
            }



            let alertMessage = ""
            if (BandListForVenue.length === 0) {
                alertMessage = "Open for booking"//no bookings case handled SEPARATELY
            } else {
                //itemClicked.textContent is the same as venue.name or 
                alertMessage = `${itemClicked.textContent} has been booked by ${BandListForVenue.join(", ")}`
            }


            //alert message displayed after iterating through all bookings
            //outside for of loop.
            window.alert(alertMessage)



        }
    }
)



export const VenueList = ()=>{
let html="<ul>"
for (const venue of allVenues){
html+=`<li data-type="venue" data-id="${venue.id}">${venue.name}</li>`
}
html+="</ul>"
return html
}

