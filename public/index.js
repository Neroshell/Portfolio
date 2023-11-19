AOS.init({
   duration: 3000
});

const menuButton = document.querySelector(".mobile-icon-div");
const stuck = document.querySelector(".stuck-nav-div-mobile");
const body =   document.getElementsByTagName('body')[0];
const mainBody = document.querySelector(".main-body");
originalColor = menuButton.style.backgroundColor;




menuButton.addEventListener("click", function(){

    if (stuck.style.display === "block") {
       stuck.style.display = "none";
       body.style.position = "static";
       this.style.backgroundColor = originalColor;  
      
    } else {
       stuck.style.display = "block";
       body.style.position = "fixed";
       this.style.backgroundColor = "#279eff";
       
    }
 });
  
