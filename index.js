$("#locate-iss-btn").click(function() {
    $(".titan-one-regular").text("Currently ISS is at:");
    $("#iss-location").slideToggle("slow");
    // $("#iss-location").html("<p><b>Lattitude: </b></p><br /><p><b>Longitude: </b></p>");

    // ("https://api.wheretheiss.at/v1/satellites/25544")
    // .then(response => response.json())
    // .then(data => {
    //     $("iss-location").html("<p><b>Lattitude: " + data.latitude.toFixed(2) + "</b></p><p><b>Longitude: " + ${data.longitude.toFixed(2)} + "</b></p>");
    // })
    // .catch(error => {
    //     console.error("Error Fetching ISS data: ", error);
    // });
});