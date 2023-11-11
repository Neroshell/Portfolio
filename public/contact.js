AOS.init({
    duration: 3000
 });

 const firstName = document.querySelector(".firstname");
 const lastName = document.querySelector(".email");
 const textArea = document.querySelector(".textarea");
 const smallFirst = document.querySelector(".small-first");
 const smallLast = document.querySelector(".small-last");
 const submit = document.querySelector(".btn-message");



 submit.addEventListener("click", (event) => {

        if (firstName.value === '') {

            firstName.style.borderColor = "red"
            smallFirst.style.display = "block";
            smallFirst.innerHTML = "Please enter your first name";
            event.preventDefault();
        }
        

        if (lastName.value === '') {

            lastName.style.borderColor = "red"
            smallLast.style.display = "block";
            smallLast.innerHTML = "Please enter your last name";
            event.preventDefault();
        }
        

        if (textArea.value === '') {
           
            textArea.style.borderColor = "red";
            event.preventDefault();

        }


 });

  firstName.addEventListener("input", function(){

    if (firstName.value !== ""){

        firstName.style.outlineColor = "green";
        firstName.style.borderColor = "green";
        smallFirst.style.display = "none";
    }

    
 });

 lastName.addEventListener("input", function(){
    if (lastName.value !== ""){

        lastName.style.outlineColor = "green";
        lastName.style.borderColor = "green";
        smallLast.style.display = "none";
    }

 });

 textArea.addEventListener("input", function(){

    if (textArea.value !== ""){

        textArea.style.borderColor = "green";
        textArea.style.outlineColor = "green";

    }

 });