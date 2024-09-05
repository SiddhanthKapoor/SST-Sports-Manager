
function validateLogin() {
    const email = emailInput.value;
    const password = passwordInput.value;


    const user = users.find(user => {
        let correctpassword = email.split('.')[0];
        console.log(correctpassword);
        return (user.email.toLowerCase() === email.toLowerCase() &&  correctpassword.toLowerCase() === password)
    });
    if (user) {
        const stringifiedUser = JSON.stringify({
            email: user.email,
            role: user.role
        });

        localStorage.setItem("user", stringifiedUser);
        
        if (user.role === "admin") {
            window.location.href = "adash.html";
        }

        if (user.role === "student") {
            window.location.href = "sdash.html";
        }
    } else {
        alert("Incorrect email or password. Please try again.");
    }
}

