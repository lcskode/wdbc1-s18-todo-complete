
/*
  The below commented code will not work because it will only listen 
  to the existing lis and not with newly created lis.
  Solution is to target the parent element (ul) and add li as second argument 
  after the click event, so that when an li is clicked 
  inside ul (be it existing or newly created), code will run
*/ 

// ============================================================================
// // select all lis and add click listeners on each
// $("li").on("click", function(){
//   $(this).toggleClass("completed");  
// });

// // click on X to delete to-do
// // select all spans, and add click listeners
// $("span").on("click", function(event){
//   // adds fadeout effect before completely removing li
//   $(this).parent().fadeOut(500, function(){
//     $(this).remove();
//   });
//   // jQuery method that stops Event Bubbling
//   event.stopPropagation();
// });
// ============================================================================

// select all lis and add click listeners on each
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");  
});

// click on X to delete to-do
// select all spans, and add click listeners
$("ul").on("click", "span", function(event){
  // adds fadeout effect before completely removing li
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  // jQuery method that stops Event Bubbling
  event.stopPropagation();
});

// add listener on input and add the typed string on to-do list once enter key is pressed
$("input[type='text']").on("keypress", function(event){
  // if enter key is pressed
  if (event.which === 13) {
    // grab the text from input and save it in todoText variable
    var todoText = $(this).val(); 
    // clear input text
    $(this).val("");
    // add or append the todoText on todo list
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
  }
});

// add listener to plus icon to toggle input form 
$(".fa-plus").on("click", function(){
  $("input[type='text']").fadeToggle(150);
});