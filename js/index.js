$(function(){
    $(".mfol li").click(function(){
        $(this).addClass('hover').siblings('li').removeClass('hover');
        $(".mfexa_type").eq($(this).index()).stop().slideDown(600).siblings(".mfexa_type").hide();
    })

    $(".point1").click(function(){
        $("html , body").animate({scrollTop:$(".m1").offset().top},400);
    });

    $(window).scroll(function(){
        // 注入ht
        var top = $(".zgm1").offset().top;//获取指定位置
        var scrollTop = $(window).scrollTop();
        if(scrollTop>top){
            $(".navbar").addClass('active');
        }else{
            $(".navbar").removeClass('active');
        }
    })

    $(".hjul li").each(function(index){
        $(this).click(function(){
            $(this).addClass('hover').siblings('li').removeClass('hover');
             $(".hjul_inner").hide().eq(index).fadeIn(200);
        })
    })
    $(".tabdl dd").each(function(index){
        $(this).click(function(){
            $(this).addClass('hover').siblings('dd').removeClass('hover');
             $(".table").hide().eq(index).fadeIn(200);
        })
    })
     // 国京考切换
    $(".nav li").each(function(index){
        $(this).click(function(){
            $(this).addClass('hover').siblings('li').removeClass('hover');
             $(".tablew").hide().eq(index).show();
        })
    })
     //弹框1
        $(".fr_close").click(function(){
            $(".frame").hide()
              $(".mask").hide()
               $("html,body").removeClass("scrll")
        })
        // 点击听课
         $(".table .lookke").each(function(inx){
            $(this).click(function(){
                // console.log(inx)
            $(".frame").eq(inx).slideDown()
             $(".mask").fadeIn(200)
             $("html,body").addClass("scrll")
        })
         })
})