window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // generate a five digit number for the contact_number variable
        // these IDs from the previous steps
        var templateParams = {
            from_name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
        };

        emailjs.send('service_w9hz06w', 'template_egwaz4f', templateParams)
            .then(function(res) {
                console.log('SUCCESS!', res.status);
                M.toast({html: 'Message has been sent. Thank you!'})
            }, function(error) {
                console.log('FAILED...', error);
                M.toast({html: 'An error has occured while sending the message... Check your information and try again'})
            });
    });
}

