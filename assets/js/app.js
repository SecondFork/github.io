$(function(){
    var header = $("#header");
    var introH = $("#intro").innerHeight();
    var scrollOffset = $(window).scrollTop();


    /*Fixed header* */
    checkScroll(scrollOffset);

    $(window).on("scroll", function(){
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);








    });

    function checkScroll(scrollOffset){

       
        //  console.log(scrollOffset);
      
       if(scrollOffset >= introH){
      
        header.addClass("fixed");
      
       }else{
      header.removeClass("fixed");
      
       } 
    }


/*Smooth scroll */
$("[data-scroll]").on("click",function(event){
   event.preventDefault();

var blockId = $(this).data("scroll");
var blockOffset = $(blockId).offset().top;
var $this = $(this);
$("#nav a").removeClass("active");
 $this.addClass("active");

console.log(blockOffset);
$("html,body").animate({
    scrollTop:blockOffset
},500)




});

/*Menu nav toggle */
$("#nav_toggle").on("click",function(event){
 event.preventDefault();
 $(this).toggleClass("active");
 $("#nav").toggleClass("active");

});



/*Collapse*/
$("[data-collapse]").on("click", function(event){
    event.preventDefault();
    var blockId = $(this).data("collapse");
$(blockId).slideToggle();
$(this).toggleClass("active");
})

/* Slider*/


$("[data-slider]").slick({
infinite:true,
fade:true,
slidesToShow:1,
slidesToScroll:1


});

});