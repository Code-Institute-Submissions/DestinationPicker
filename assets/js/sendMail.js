// Used the code institute lessons to create this function for mailing me
function sendMail(contactForm) {
    emailjs.send("gmail", "destination_picker", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value
    });
    return false;
}