// Your code goes here

// document.addEventListener("DOMContentLoaded", function() {
//     console.log("The DOM has loaded");
//   }); 

//   console.log(
//     "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
//   ); 

// let x = document.querySelector("p.text")
// x.innerHTML = "This is really cool!"

document.addEventListener( "DOMContentLoaded", function () {
    updateDOM()
  } );
  
  
  function updateDOM() {
    document.getElementById( "text" )
      .innerHTML = "This is really cool!";
  }