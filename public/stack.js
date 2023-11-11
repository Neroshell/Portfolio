AOS.init({
   duration: 3000
});


const menuButton = document.querySelector(".mobile-icon-div");
const stuck = document.querySelector(".stuck-nav-div-mobile");


menuButton.addEventListener("click", function(){
    if (stuck.style.display === "block") {
       stuck.style.display = "none";
    } else {
       stuck.style.display = "block";
    }
 });
  
