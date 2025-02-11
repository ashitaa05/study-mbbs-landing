document.getElementById('leadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("Form submitted event triggered!"); // Debugging

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let country = document.getElementById('country').value;
    let errorMsg = document.getElementById('error-msg');

    // Check if error-msg exists before using it
    if (!errorMsg) {
        console.error("Element with ID 'error-msg' not found.");
        return;
    }

    // Email validation regex
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Phone validation regex (exactly 10 digits)
    let phonePattern = /^[0-9]{10}$/;

    if (name === "" || !emailPattern.test(email) || !phonePattern.test(phone) || country === "") {
        errorMsg.classList.remove('hidden');
        errorMsg.innerText = "Please fill all fields correctly.";
    } else {
        errorMsg.classList.add('hidden');
        alert('Your application has been submitted successfully!');
        console.log("Form submitted successfully!"); // Debugging
        this.reset();
    }
});



        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-XXXXX-Y');
