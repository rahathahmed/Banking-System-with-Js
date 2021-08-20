document.getElementById("sign-in").addEventListener("click",function(){ 
    const mailInput = document.getElementById('floatingInput');
    const userMail = mailInput.value;
    const passwordInput = document.getElementById('floatingPassword');
    const userPassword = passwordInput.value;

    if(userMail == "ahmed@gmail.com" && userPassword == "12345"){ 
        window.location.href="bank.html";
    }
})



