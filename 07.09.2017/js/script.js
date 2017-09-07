$(document).ready(function(){
    $(".btn").click(function(){
        $(this).find("li").slideToggle("slow");
    });
});