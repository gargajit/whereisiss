$("#locate-iss-btn").click(function() {
    $(".titan-one-regular").text("Currently ISS is at:");
    $("#iss-location").slideToggle("slow");
    $("#iss-location").html("<p><b>Lattitude: </b></p><br /><p><b>Longitude: </b></p>");
});