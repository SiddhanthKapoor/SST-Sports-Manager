function validateLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
       
    const correctEmail = "iamadmin@gmail.com";
    const correctPassword = "rightpassword";

    if (email === correctEmail && password === correctPassword) {
      
        window.location.href = 'adash.html'; 
    } else {
        alert("Incorrect email or password. Please try again.");
    }
}