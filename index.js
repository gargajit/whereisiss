$("#locate-iss-btn").click(function() {
    $(".titan-one-regular").text("Currently ISS is at:");
    $("#iss-location").slideDown("slow", function() {
        
        $("#iss-location").html('<p id="latitude"><b>Lattitude: </b></p><p id="longitude"><b>Longitude: </b></p><p id="location"></p>');
        
        
        // Fetching Coordinates
        $.getJSON("https://api.wheretheiss.at/v1/satellites/25544", function(data){
            const lat = data.latitude;
            const long = data.longitude;

            console.log(`Coordinates: ${lat} and ${long}`); 
            
            $('#latitude').append(lat.toFixed(2));
            $('#longitude').append(long.toFixed(2)); 

            // Reverse Geolocation
            const geocodeURL = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${long}&format=json&accept-language=en`;
            $.getJSON(geocodeURL)
                .done(function(locationData){
                    if (locationData.error) {
                        $('#location').append(`ISS is over Ocean`);
                    } else {
                        const address = locationData.address || {};
                        const country = address.country || 'Unknown';
                        const displayLocation = country ? `Country: ${country}` : `Ocean`;

                        $('#location').append(`ISS is over ${displayLocation}`);
                    }
                })
                .fail(function(error) {
                    console.error("Error fetching location data: ", error);
                    $('#location').append("Unable to determine location.");
                });
            })          
            .fail(function(error) {
                console.error("Error Fetching ISS data: ", error);
            });
    });
});
