//Remove all project overlays if click outside of #Portfolio
  $('body').click(function(e){
    if ($(e.target).parents().is('#portfolio')){
      null;
    } else{
        let overlay = $(".photo-overlay");
        overlay.fadeOut();
    }
  });

//Show and Hide each project overlay when clicked
 $('.photo-container').click(function(){
   let overlay = $(".photo-overlay");
   let thisOverlay = $(this).find(overlay);
   if(thisOverlay.is(":visible")){
     overlay.fadeOut();
   } else {
       $(overlay).fadeOut();
       $(this).find(overlay).fadeIn();
   }
 });

 const nav = $("nav");
 const burger = $(".burgerSVG");

 //Rotate Hamburger when clicked and show/hide nav menu
 function clickBurger() {
   if(burger.hasClass("rotate")){
     burger.removeClass("rotate");
     nav.slideUp();
     return;
   } else {
       burger.addClass("rotate");
       nav.slideDown();
       return;
   }
 }

// Close Nav if click outside of Nav
 function bodyClick(e) {
   if ($(window).width()<1024){
     if ($(e.target).parents().is('.burgerButton' || 'nav') || $(e.target).is('.burgerButton')){
       return;
     } else{
        nav.slideUp();
        burger.removeClass("rotate");
        return;
     }
   }
 }

 // Navigation and Hamburger Menu
$('body').click(bodyClick);
$(".burgerButton").click(clickBurger);

//Window resize show/hide nav/burger
$(window).resize(function() {
  if (window.innerWidth>1023){
    nav.show();
    burger.removeClass("rotate");
  } else if (burger.hasClass("rotate")){
    nav.show();
  } else {
    nav.hide();
  }
});
