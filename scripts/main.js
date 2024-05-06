import { BandList } from "./Bands.js"
import { VenueList } from "./Venues.js"
import { BookingList } from "./Bookings.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Tour Some Sugar On Me</h1>

<article class="currentBooking">
<h2>Bookings</h2>
${BookingList()}
</article>

<article class="details">

    <section class="detail--column list details__venues">
    <h2>Venues</h2>
        ${VenueList()}
    </section>

    <section class="detail--column list details__bands">
        <h2>Bands</h2>
        ${BandList()}
    </section>

</article>

`

mainContainer.innerHTML = applicationHTML