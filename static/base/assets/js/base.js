
// 
// see https://stackoverflow.com/questions/24514717/bootstrap-navbar-active-state-not-working
$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});
