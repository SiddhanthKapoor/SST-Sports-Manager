function validateSLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
       
    const correctEmail = "iamstudent@gmail.com";
    const correctPassword = "pass123";

    if (email === correctEmail && password === correctPassword) {
      
        window.location.href = 'sdash.html'; 
    } else {
        alert("Incorrect email or password. Please try again.");
    }
}



