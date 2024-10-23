document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from reloading the page

    // Collect the message from the form
    const messageContent = document.getElementById('message').value;

    // Send the message via EmailJS
    emailjs.send("service_uuneiqk", "template_fp5e37j", {
        message: messageContent
    }).then(function(response) {
        // Update the status to show success message
        document.getElementById('status').textContent = "Message sent successfully!";
        console.log("SUCCESS", response.status, response.text);  // For debugging
    }, function(error) {
        // Update the status to show failure message
        document.getElementById('status').textContent = "Failed to send message!";
        console.log("FAILED", error);  // For debugging
    });

    // Optionally clear the form after submission
    this.reset();
});