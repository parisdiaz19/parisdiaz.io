window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        function popup () {
            var popup = document.getElementById('myPopup');
            popup.classList.toggle("show");
        }
        // generate a five digit number for the contact_number variable
        // these IDs from the previous steps
        var templateParams = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
        };

        emailjs.send('service_w9hz06w', 'template_egwaz4f', templateParams)
            .then(function(res) {
                console.log('SUCCESS!', res.status);
                popup();
                location.reload();
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}