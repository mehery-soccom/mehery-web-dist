$( document ).ready(function() {
    var w = window.innerWidth;

    if(w > 767){
        $('#menu-jk').scrollToFixed();
    }else{
        $('#menu-jk').scrollToFixed();
    }
})


$( document ).ready(function() {

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay: true,
        dots: true,
        autoplayTimeout: 5000,
        navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    function loginSubmit() {
         return $.post(window.CONST.CONTEXT + "/auth/login/submit",{
             username :   $("#login-username").val(),
             password :  $("#login-password").val(),
             rememberme : $("#rememberme").is(":checked")
         }).done(function(rsp){
             console.log(rsp);
             if(rsp.data && (rsp.data.success || rsp.data == 'success'))
                 location.href = window.CONST.CONTEXT + "/app/home";
             else {
                 $("#login_error").text(rsp.message);
             }
         });
    }


    $("#btn-login").click(function(){
        return loginSubmit();
    });

    $('.login-det').on('keypress', function(e) {
        var code = e.keyCode || e.which;
        if(code==13){
            return loginSubmit();
        }
    });

});