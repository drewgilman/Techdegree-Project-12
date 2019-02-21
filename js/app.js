//Remove all project overlays if click outside of #Portfolio
  $('body').click(function(e){
    if ($(e.target).parents().is('#portfolio')){
      null
    }else{
      let overlay = $(".photo-overlay");
      overlay.fadeOut();
  };
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

 //Rotate Hamburger when clicked and show/hide nav menu
 $(".burgerButton").click(function(){
   const burger = $(".burgerSVG");
   const nav = $("nav");
   if(burger.hasClass("rotate")){
     burger.removeClass("rotate")
     nav.slideUp();
   } else {
     burger.addClass("rotate")
     nav.slideDown()
   }
 });

 $('body').click(function(e){
   if ($(e.target).parents().is('.burgerButton' || 'nav') || $(e.target).is('.burgerButton')){
     null
   }else{
      const nav = $("nav");
      const burger = $(".burgerSVG");
      nav.slideUp();
      burger.removeClass("rotate");
 };
});
