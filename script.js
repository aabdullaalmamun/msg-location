function sendMailWithLocation() {
    const message = document.querySelector("#message").value;
    const toEmail = "YOUR_EMAIL_ADDRESS";  // Replace with recipient's email

    // Check if Geolocation is supported
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            console.log("Latitude: " + latitude, "Longitude: " + longitude); // Debugging line

            const params = {
                message: message,
                location: `Latitude: ${latitude}, Longitude: ${longitude}`,
                to_email: toEmail
            };

            var serviceID = "service_uuneiqk";
            var templateID = "template_fp5e37j";

            emailjs.send(serviceID, templateID, params)
            .then(function(res) {
                alert("Email with location sent successfully!");
            })
            .catch(function(error) {
                alert("Failed to send email: " + JSON.stringify(error));
            });
        }, function(error) {
            handleGeolocationError(error);  // Handle error here
        });
    } else {
        alert("Geolocation is not supported by your browser.");
    }
}

function handleGeolocationError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("Permission denied: You need to allow access to location.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Position unavailable: The network is having trouble retrieving your location.");
            break;
        case error.TIMEOUT:
            alert("Timeout: Retrieving your location took too long.");
            break;
        case error.UNKNOWN_ERROR:
            alert("Unknown error occurred while retrieving your location.");
            break;
    }
}
