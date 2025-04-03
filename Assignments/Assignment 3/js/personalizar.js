$(window).on("scroll", function (){
    if($(this).scrollTop() > 100){
        $("header").addClass("Headerscrolled");
    }else{
        $("header").removeClass("Headerscrolled");
    }
 });