$(function(){
    if(!navigator.userAgent.match(/(iPhone|iPad|Android)/)){
        $.sublime_slideshow({
            src:[
            {url:"images/1.jpg"},
            {url:"images/2.jpg"},
            {url:"images/3.jpg"},
            {url:"images/4.jpg"},
            ],
            duration:   5,
            fade:       1,
            scaling:    false,
            rotating:   false,
            overlay:    "images/pattern.png"
        });
    }
    if(navigator.userAgent.match(/(iPhone|iPad|Android)/)){
        $.sublime_slideshow({
            src:[
            {url:"images/1.jpg"},
            {url:"images/2.jpg"},
            {url:"images/3.jpg"},
            ],
            duration:   4,
            fade:       1,
            scaling:    false,
            rotating:   false,
            overlay:    "images/pattern.png"
        });
    }

    hsize = $(window).height();
    $("#contents").css("top", hsize + "px");
       $(window).resize(function () {
        hsize = $(window).height();
        $("#contents").css("top", hsize + "px");
    });
    if(navigator.userAgent.match(/(iPhone|iPad|Android)/)){
        $("#contents").css("top", hsize/3*2 + "px");
        $(window).resize(function () {
            hsize = $(window).height();
            $("#contents").css("top", hsize/3*2 + "px");
        });
    }
    $("#gounder").click(function(){
        var p = $("#contents").offset().top - 59;
        $('html,body').animate({ scrollTop: p}, 'normal');
        return false;
    });
    $(".goaboutme").click(function(){
        var p = $("body").offset().top;
        $('html,body').animate({ scrollTop: p}, 'normal');
        return false;
    });
    $(".goweb").click(function(){
        var p = $(".web").offset().top - 59;
        $('html,body').animate({ scrollTop: p}, 'normal');
        return false;
    });
    $(".goclass").click(function(){
        var p = $(".class").offset().top - 59;
        $('html,body').animate({ scrollTop: p}, 'normal');
        return false;
    });
    $(".goindividual").click(function(){
        var p = $(".individual").offset().top - 59;
        $('html,body').animate({ scrollTop: p}, 'normal');
        return false;
    });
    $(".godesignquartetto").click(function(){
        var p = $(".designquartetto").offset().top - 59;
        $('html,body').animate({ scrollTop: p}, 'normal');
        return false;
    });


});