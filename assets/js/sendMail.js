// Function for sending a mail to the owner of the website, hiding the modal and cleering the form.
// My mentor helped me with the try and catch.
function sendMail(contactForm) {
    try {
        emailjs.send("gmail", "destination_picker", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.email.value,
            "message": contactForm.message.value
        });
        $("#myModal").modal("hide");
        $("#name, #email, #message").val("");
        alert("Thank you for your message!");
        return true;
    } catch (error) {
        $("#myModal").modal("hide");
        $("#name, #email, #message").val("");
        alert("Something went wrong. Please try again later.");
        return false;
    }
}