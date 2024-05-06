import { getBands, getBookings, getVenues} from "./database.js"
import {  findVenue } from "./Bookings.js"

const allBands=getBands()
const allBookings=getBookings()
const allVenues=getVenues()

////Book 3- column 4 - Layout and ERD
// When a band name is clicked,
//window alert displays all of the venues they play 



document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        const bandId = itemClicked.dataset.id

        if (itemClicked.dataset.type === "band") {

            let VenueListForBand = [] // Make array inside the click event listener!!!

            //check if booking venue id==venue.id if so push the band associated with the booking
            for (const booking of allBookings) {
                if ( booking.bandId === parseInt(bandId)) {
                    //findBand() function imported from Bookings.js
                    const venue = findVenue(booking, allVenues)
                    VenueListForBand.push(venue)
                }
            }


            let alertMessage = ""
            if (VenueListForBand.length === 0) {
                alertMessage = "No venues yet"//no venues case handled SEPARATELY
            } else {
                //itemClicked.textContent ******* to display band name that you clicked
                alertMessage = `${itemClicked.textContent} is playing at ${VenueListForBand.join(", ")} `

            }
            
            //alert message displayed after iterating through all bookings
            //outside for of loop.
            window.alert(alertMessage)
        }
    
    }
);


export const BandList = ()=>{
let html="<ul>"
for (const band of allBands){
html+=`<li data-id="${band.id}" data-type="band">${band.name}</li>`
}
html+="</ul>"
return html
}









//Book-4 Extra Section display all band members: (NOT COMPLETE)

// import { getBands, getBookings, getVenues, getBandMembers } from "./database.js"
// import { findVenue } from "./Bookings.js"

// const allBands = getBands()
// const allBookings = getBookings()
// const allVenues = getVenues()
// const allBandMembers = getBandMembers()

// document.addEventListener("click", (clickEvent) => {
//     const itemClicked = clickEvent.target
//     const bandId = parseInt(itemClicked.dataset.id)

//     if (itemClicked.dataset.type === "band") {
//         const band = allBands.find(band => band.id === bandId)

//         let venueListForBand = []
//         for (const booking of allBookings) {
//             if (booking.bandId === bandId) {
//                 const venue = findVenue(booking, allVenues)
//                 venueListForBand.push(venue)
//             }
//         }
// debugger
//         let alertMessage = `${band.name} is playing at: `
//         if (venueListForBand.length === 0) {
//             alertMessage += "No venues yet"
//         } else {
//             alertMessage += venueListForBand.join(", ")
//         }
// debugger
//             /*------------------Book-3 -EXTRA Section block of code: list BAND MEMBER NAMES and venue on window pop up:----------*/
//         const bandMembersList = allBandMembers
//             .filter(member => member.bandId === bandId)
//             .map(member => `${member.firstName} ${member.lastName} (${member.role})`)

//         if (bandMembersList.length > 0) {
//             alertMessage += "\nBand Members: " + bandMembersList.join(", ")
//         } else {
//             alertMessage += "\nNo band members found for this band."
//         }

//         window.alert(alertMessage)
//     }
// });

// export const BandList = () => {
//     let html = "<ul>"
//     for (const band of allBands) {
//         html += `<li data-id="${band.id}" data-type="band">${band.name}</li>`
//     }
//     html += "</ul>"
//     return html
// }


