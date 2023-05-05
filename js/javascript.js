$(function(){
    $(function(){
        $(".jumpWindow .close,.jumpWindow .check").on("click",function(){
            $(".filter")
            .removeClass("display");
        })
    
        $("footer ul li").on("click",function(){
            var n = $(this).index();
    
            if(n == 0)
            {
                $(".filter,.jumpWindow.rule")
                .addClass("display")
                .siblings().removeClass("display");
            }
            else if(n == 1)
            {
                $(".filter,.jumpWindow.record")
                .addClass("display")
                .siblings().removeClass("display");
            }
            else if(n == 2)
            {
                $(".filter,.jumpWindow.acting")
                .addClass("display")
                .siblings().removeClass("display");
            }
        })
    
        $(".gameBox .tableBox button").on("click",function(){
            $(".filter,.jumpWindow.betting")
            .addClass("display")
            .siblings().removeClass("display");
        })

        $(".jumpWindow.acting .clickable").on("click",function(){
            $(".filter,.jumpWindow.actingDetail")
            .addClass("display")
            .siblings().removeClass("display");
        })
    })
})

$(function(){
    $(".jumpWindow .topList li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");
    })

    $(".jumpWindow .pageBox li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");
    })

    $(".rowBox").on("click",function(){
        if($(this).hasClass("left"))
        {
            $(this)
            .removeClass("left")
            .addClass("right");
        }
        else{
            $(this)
            .removeClass("right")
            .addClass("left");
        }
    })
})

$(function(){
    $($(".mainArea .tableBox i").next()).on("click",function(){
        $(this)
        .toggleClass("active");
    })
})