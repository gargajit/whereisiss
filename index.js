$("#locate-iss-btn").click(function() {
    $(".titan-one-regular").text("Currently ISS is at:");
    $("#iss-location").slideDown("slow");
    $("#iss-location").html('<p id="latitude"><b>Lattitude: Loading...</b></p><br /><p id="longitude"><b>Longitude: Loading...</b></p>');

    $.getJSON("https://api.wheretheiss.at/v1/satellites/25544", function(data){
        $('#latitude').append(data.latitude.toFixed(2));
        $('#longitude').append(data.longitude.toFixed(2));
    })       
    .fail(function(error) {
        console.error("Error Fetching ISS data: ", error);
    });
});
