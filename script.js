// ================= EMAILJS =================

// Initialize EmailJS
emailjs.init({
    publicKey: "yRRtew9aQkiW52aoe"
});


// ================= CONTACT FORM =================

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const form = this;
        const button = form.querySelector("button[type='submit']");

        // Get current date and time
        const now = new Date();

        const time = now.toLocaleString("en-US", {
            dateStyle: "medium",
            timeStyle: "short"
        });

        // Create hidden time field
        let timeField = form.querySelector('input[name="time"]');

        if (!timeField) {

            timeField = document.createElement("input");

            timeField.type = "hidden";
            timeField.name = "time";

            form.appendChild(timeField);
        }

        timeField.value = time;


        // Change button text
        if (button) {
            button.disabled = true;
            button.innerHTML = "Sending...";
        }


        // Send email using EmailJS
        emailjs.sendForm(
            "service_x5j2do9",
            "template_2yjen0y",
            form
        )

        .then(function (response) {

            console.log(
                "SUCCESS!",
                response.status,
                response.text
            );

            alert("Message sent successfully!");

            form.reset();

            if (button) {
                button.disabled = false;
                button.innerHTML =
                    'Send Message <i class="fa-solid fa-paper-plane"></i>';
            }

        })

        .catch(function (error) {

            console.error("EMAILJS ERROR:", error);

            alert(
                "Message could not be sent. Please check your EmailJS settings and try again."
            );

            if (button) {
                button.disabled = false;
                button.innerHTML =
                    'Send Message <i class="fa-solid fa-paper-plane"></i>';
            }

        });

    });

}