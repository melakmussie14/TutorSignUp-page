document.getElementById("tutoringForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    let formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        time: document.getElementById("time").value,
        message: document.getElementById("message").value
    };

    // Optionally show a loading spinner/message here
    document.getElementById("loadingMessage").style.display = "block";

       .then(response => response.text())
    .then(data => {
        if (data === "Success") {
            window.location.href = "thank-you.html"; // Redirect to thank-you page
        } else {
            alert("Submission failed. Please try again."); // Handle failure
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
    })
    .finally(() => {
        // Hide loading spinner/message
        document.getElementById("loadingMessage").style.display = "none";
    });
});
