// JavaScript source code
  mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("header").style.height = "65.5px";
   document.getElementById("logo").style.height = "140px";
   document.getElementById("logo").style.width = "196px";
        document.getElementById("logo").style.marginTop= "-52px";

  } else {
    document.getElementById("header").style.height = "98.25px";
       document.getElementById("logo").style.height = "200px";
    document.getElementById("logo").style.width = "280px";
     document.getElementById("logo").style.marginTop= "-65px";

  }
  

}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});

}
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("barContent").style.marginLeft = "250px";


}
   
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("barContent").style.marginLeft = "0";


  
}




