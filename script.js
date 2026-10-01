```javascript
// ==========================================
// SKYBOOK FLIGHT RESERVATION SYSTEM
// ==========================================


// WAIT UNTIL PAGE IS LOADED

document.addEventListener("DOMContentLoaded", function () {

    const searchButton =
        document.getElementById("searchButton");

    searchButton.addEventListener("click", searchFlights);

});


// ==========================================
// SEARCH FLIGHTS
// ==========================================

function searchFlights() {

    const from =
        document.getElementById("from").value;

    const to =
        document.getElementById("to").value;

    const departure =
        document.getElementById("departure").value;

    const travelers =
        document.getElementById("travelers").value;

    const travelClass =
        document.getElementById("travelClass").value;

    const fareType =
        document.getElementById("fareType").value;

    const flightType =
        document.getElementById("flightType").value;


    // Check same location

    if (from === to) {

        alert("From and To cannot be the same.");

        return;
    }


    // Check departure date

    if (departure === "") {

        alert("Please select a departure date.");

        return;
    }


    // Show available flights

    const results =
        document.getElementById("results");

    const flightList =
        document.getElementById("flightList");


    results.style.display = "block";


    flightList.innerHTML = `

        <div class="flight-card">

            <div>

                <div class="airline">
                    ✈ Sky Airways
                </div>

                <div class="route">
                    ${from} → ${to}
                </div>

                <div class="time">
                    06:30 AM → 08:45 AM
                </div>

                <div class="flight-info">
                    ${flightType} |
                    ${travelClass} |
                    ${travelers} Traveler(s) |
                    ${fareType} Fare
                </div>

            </div>

            <div>

                <div class="price">
                    ₹4,500
                </div>

                <button
                    class="book-btn"
                    onclick="bookFlight(
                        'Sky Airways',
                        '${from}',
                        '${to}',
                        '${departure}',
                        '${travelers}',
                        '${travelClass}',
                        '4500'
                    )">

                    Book Now

                </button>

            </div>

        </div>


        <div class="flight-card">

            <div>

                <div class="airline">
                    ✈ Cloud Airlines
                </div>

                <div class="route">
                    ${from} → ${to}
                </div>

                <div class="time">
                    10:00 AM → 12:15 PM
                </div>

                <div class="flight-info">
                    ${flightType} |
                    ${travelClass} |
                    ${travelers} Traveler(s) |
                    ${fareType} Fare
                </div>

            </div>

            <div>

                <div class="price">
                    ₹5,200
                </div>

                <button
                    class="book-btn"
                    onclick="bookFlight(
                        'Cloud Airlines',
                        '${from}',
                        '${to}',
                        '${departure}',
                        '${travelers}',
                        '${travelClass}',
                        '5200'
                    )">

                    Book Now

                </button>

            </div>

        </div>

    `;


    // Scroll to flights

    results.scrollIntoView({
        behavior: "smooth"
    });

}


// ==========================================
// BOOK FLIGHT
// ==========================================

function bookFlight(
    airline,
    from,
    to,
    departure,
    travelers,
    travelClass,
    price
) {


    const booking =
        document.getElementById("booking");

    const bookingDetails =
        document.getElementById("bookingDetails");


    // Generate booking ID

    const bookingID =
        "SKY" +
        Math.floor(
            100000 +
            Math.random() * 900000
        );


    bookingDetails.innerHTML = `

        <p>
            <strong>Booking ID:</strong>
            ${bookingID}
        </p>

        <p>
            <strong>Airline:</strong>
            ${airline}
        </p>

        <p>
            <strong>From:</strong>
            ${from}
        </p>

        <p>
            <strong>To:</strong>
            ${to}
        </p>

        <p>
            <strong>Departure:</strong>
            ${departure}
        </p>

        <p>
            <strong>Travelers:</strong>
            ${travelers}
        </p>

        <p>
            <strong>Class:</strong>
            ${travelClass}
        </p>

        <p>
            <strong>Total Fare:</strong>
            ₹${price}
        </p>

        <p>
            <strong>Status:</strong>
            ✅ Booking Confirmed
        </p>

    `;


    booking.style.display = "block";


    booking.scrollIntoView({
        behavior: "smooth"
    });

}
```
