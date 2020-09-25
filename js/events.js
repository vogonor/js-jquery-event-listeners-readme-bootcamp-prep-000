function getIt() {
  
  $("p").on("click", function(){
    alert("Hey!")
  })
}

function frameIt() {

  $("img").on("load", function() {
    
    $("img").addClass("tasty")
    
  });
}

function pressIt() {
  
  $("form").on("keyDown", function(key) {
    
     if (key.which == 71){
       $("input").submit()
        alert("You have pressed the G key");
      }
  })
}

function submitI(){
  $("form").on("submit", function(e){
     if ($( "input").first().val() === 71) {
    e.alert('your form is going to be submitted now.');
    return;
  } else {
  alert("you entered the wrong value");
  return;
  }
  })
}

$(document).ready(function(){

// call functions here

});
