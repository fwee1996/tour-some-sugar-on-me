//Rules:Each venue can accomodate 2 bands per night
//Each band can perform 1 or 2 acts every day

const database={
    bands:[
        {id:1,
        name :"RJA",
        membercount:5,
        genre:"Alternative Rock",
        yearestablished: 2003
        },
        {id:2,
            name :"Chvrches",
            memberCount:3,
            genre:"Synth-pop",
            yearEstablished: 2011
        },
        {id:3,
            name :"MMF",
            memberCount:5,
            genre:" Metalcore",
            yearEstablished: 2006},
        {id:4,
            name :"BMTH",
            memberCount:4,
            genre:"Alternative Rock",
            yearEstablished: 2004},
        {id:5,
            name :"Saosin",
            memberCount:5,
            genre:"Post-hardcore",
            yearEstablished: 2003},    
        {id:6,
            name :"Secondhand Serenade",
            memberCount:1,
            genre:"Emo",
            yearEstablished: 2004}
    ],
    venues:[
        {id:1,
        name: "Chain Reaction",
        address: "1652 W Lincoln Ave, Anaheim, CA 92801",
        sqft: 4000,
        maxCapacity: 300},
        {id:2,
        name: "The White Rabbit",
        address: "2410 N St Mary's St, San Antonio, TX 78212",
        Sqft: 5000, 
        maxCapacity: 300},
        {id:3,
        name: "The Masquerade",
        address: "75 Martin Luther King Jr Dr SW, Atlanta, GA 30303",
        sqft: 1000,
        maxCapacity: 200}
    ],
    bookings:[
        {id:1,
        bandId: 2,
        venueId: 1,
        timestamp: 1613538111396 },
        {id:2,
        bandId:4 ,
        venueId:3,
        timestamp: 1614598112396 },
        {id:3,
        bandId: 5,
        venueId: 3,
        timestamp: 1612438112396 },
    ],
    bandMembers:[
        {id: 1,
        firstName: "Ronnie",
        lastName: "Winter",
        yearBorn: "1984",
        role: "Lead vocals",
        bandId: "1"
        },
        {id: 2,
        firstName: "Duke",
        lastName: "Kitchens",
        yearBorn: "1984",
        role: "Guitar",
        bandId: "1"
        },
        {id: 3,
        firstName: "Joey",
        lastName: "Westwood",
        yearBorn: "1986",
        role: "Bass",
        bandId: "1"
        },
        {id: 4,
        firstName: "Randy",
        lastName: "Winter",
        yearBorn: "1982",
        role: "Drums",
        bandId: "1"
        },
        {id: 5,
        firstName: "Josh",
        lastName: "Burke",
        yearBorn: "1983",
        role: "Guitar",
        bandId: "1"
        },
        {id: 6,
        firstName: "Lauren",
        lastName: "Mayberry",
        yearBorn: "1987",
        role: "Lead vocals",
        bandId: "2"
        },
        {id: 7,
        firstName: "Iain",
        lastName: "Cook",
        yearBorn: "1975",
        role: "Guitar",
        bandId: "2"
        },
        {id: 8,
        firstName: "Martin",
        lastName: "Doherty",
        yearBorn: "1984",
        role: "Synthesizers",
        bandId: "2"
        }
                
            
    ]
}


export const getBands = () => {
    return database.bands.map(bands=>({...bands}))
}

export const getVenues =()=> {
    return database.venues.map(venues=>({...venues}))
}

export const getBookings =()=> {
    return database.bookings.map(bookings=>({...bookings}))
}

export const getBandMembers = () => {
    return database.bandMembers.map(bandmembers=>({...bandmembers}))
}