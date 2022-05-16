

function myFunction(y){
    var y = document.getElementById("hamburger");
     y.classList.toggle("change");
  
  
     var x = document.getElementById("innerbar");
      
     if (x.style.display === "block") {
       x.style.display = "none";
       
     }     
     else {
       x.style.display = "block";
      }
  }
  