$(document).ready(function () {


    $(".menu-close").click(function () {
        $(".menu").hide();
        $(".menu-close").hide();
        $(".menu-open").show();
    });


    $(".menu-open").click(function () {
        $(".menu").css('display', 'flex');
        $(".menu-close").show();
        $(".menu-open").hide();
    });

    $(".menulink").click(function () {
        $(".menu").hide();
        $(".menu-close").hide();
        $(".menu-open").show();
    });


});