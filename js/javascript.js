//mainWrap
$(function(){
    // $(".mainWrap .top .changeStyle").on("click",function(){
    //     $(this).find("button")
    //     .toggleClass("active");

    //     $(".mainWrap .listBox,footer .tableBox")
    //     .toggleClass("display")
    // })

    $(".mainWrap .top .innerBox").on("click",function(){
        if($(this).hasClass("left"))
        {
            $(this)
            .removeClass("left")
            .addClass("right");
        }
        else
        {
            $(this)
            .removeClass("right")
            .addClass("left");
        }

        $(".mainWrap .listBox,footer .tableBox")
        .toggleClass("display");
    })
})

//profitWrap
$(function(){
    // $(".profitWrap .changeStyle").on("click",function(){
    //     $(this).find("button")
    //     .toggleClass("active")

    //     $(".profitWrap .listBox")
    //     .toggleClass("display");
    // })

    $(".profitWrap .top .innerBox").on("click",function(){
        if($(this).hasClass("left"))
        {
            $(this)
            .removeClass("left")
            .addClass("right");
        }
        else
        {
            $(this)
            .removeClass("right")
            .addClass("left");
        }

        $(".profitWrap .listBox")
        .toggleClass("display");
    })

    $(".profitWrap .tableTitle").on("click",function(){
        $(this)
        .toggleClass("active")
        .next(".tableBox").toggleClass("display");
    })
})

//gameReportWrap
$(function(){
    $(".gameReportWrap .openAll").on("click",function(){
        $(".tableBox.account.all")
        .addClass("display")
        .siblings().removeClass("display");

        $("footer .tableBox.account.all")
    })

    $(".gameReportWrap .openIndex").on("click",function(){
        $(".tableBox.index")
        .addClass("display")
        .siblings().removeClass("display");
    })

    $(".gameReportWrap .openAccount_1").on("click",function(){
        $(".tableBox.account.single_1")
        .addClass("display")
        .siblings().removeClass("display");
    })
    $(".gameReportWrap .openAccount_2").on("click",function(){
        $(".tableBox.account.single_2")
        .addClass("display")
        .siblings().removeClass("display");
    })

    $(".gameReportWrap .openRecord_1").on("click",function(){
        $(".tableBox.betRecord.single_1")
        .addClass("display")
        .siblings().removeClass("display");
    })
    $(".gameReportWrap .openRecord_2").on("click",function(){
        $(".tableBox.betRecord.single_2")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//tips
$(function(){
    $(".question_ic").on("click",function(){
        $(this).find("span")
        .toggleClass("display");
    })
})

//downList
$(function(){
    $(".downList .btnBox button").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");
    })

    $(".downList .checkStyle").on("change",function(){
        $(this)
        .toggleClass("active")
        .next().toggleClass("active")
    })

    $(".downList .rowBox").on("click",function(){
        $(this)
        .toggleClass("active");
    })

    $(".downList .langBox").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        $(".filter,.jumpWindow,.leftList,.downList")
        .removeClass("display");
    })
})

//leftList
$(function(){
    $(".leftList .listBox li").on("click",function(){
        $(this)
        .toggleClass("active")
        .next(".smallList").toggleClass("display");
    })
})

//jumpWindow
$(function(){
    $(".filter .close").on("click",function(){
        $(".filter,.jumpWindow,.leftList,.downList")
        .removeClass("display");
    })

    $(".mainWrap .top .inputBox").on("click",function(){
        $(".jumpWindow,.leftList,.downList")
        .removeClass("display");

        $(".filter,.downList.search")
        .addClass("display");
    })

    $("header .listBtn").on("click",function(){
        $(".jumpWindow,.leftList,.downList")
        .removeClass("display");

        $(".filter,.leftList")
        .addClass("display");
    })

    $(".activeWrap td.depositAgainBtn").on("click",function(){
        $(".jumpWindow,.leftList,.downList")
        .removeClass("display");

        $(".filter,.active_depositAgain")
        .addClass("display");
    })
    $(".activeWrap td.depositPeopleTotalBtn").on("click",function(){
        $(".jumpWindow,.leftList,.downList")
        .removeClass("display");

        $(".filter,.active_depositPeopleTotal")
        .addClass("display");
    })
    $(".activeWrap td.depositTotalBtn").on("click",function(){
        $(".jumpWindow,.leftList,.downList")
        .removeClass("display");

        $(".filter,.active_depositTotal")
        .addClass("display");
    })
    $(".activeWrap td.withdrawalBtn").on("click",function(){
        $(".jumpWindow,.leftList,.downList")
        .removeClass("display");

        $(".filter,.active_withdrawal")
        .addClass("display");
    })
    $(".activeWrap td.withdrawalAgainBtn").on("click",function(){
        $(".jumpWindow,.leftList,.downList")
        .removeClass("display");

        $(".filter,.active_withdrawalAgain")
        .addClass("display");
    })
    $(".activeWrap td.withdrawalTotalBtn").on("click",function(){
        $(".jumpWindow,.leftList,.downList")
        .removeClass("display");

        $(".filter,.active_withdrawalTotal")
        .addClass("display");
    })
    $(".activeWrap td.loginBtn").on("click",function(){
        $(".jumpWindow,.leftList,.downList")
        .removeClass("display");

        $(".filter,.active_login")
        .addClass("display");
    })
    $(".activeWrap td.signupBtn").on("click",function(){
        $(".jumpWindow,.leftList,.downList")
        .removeClass("display");

        $(".filter,.active_signup")
        .addClass("display");
    })

    $(".changeBtn.forName").on("click",function(){
        $(".jumpWindow,.leftList,.downList")
        .removeClass("display");

        $(".filter,.changeName")
        .addClass("display");
    })

    $(".changeBtn.forPW").on("click",function(){
        $(".jumpWindow,.leftList,.downList")
        .removeClass("display");

        $(".filter,.changePW")
        .addClass("display");
    })

    $(".openWindow_type1").on("click",function(){
        $(".jumpWindow,.leftList,.downList")
        .removeClass("display");

        $(".filter,.gameReportWindow.type_1")
        .addClass("display");
    })
    $(".openWindow_type2").on("click",function(){
        $(".jumpWindow,.leftList,.downList")
        .removeClass("display");

        $(".filter,.gameReportWindow.type_2")
        .addClass("display");
    })

    $(".openHierarchy").on("click",function(){
        $(".jumpWindow,.leftList,.downList")
        .removeClass("display");

        $(".filter,.hierarchyWindow")
        .addClass("display");
    })
    $(".openPlatform").on("click",function(){
        $(".jumpWindow,.leftList,.downList")
        .removeClass("display");

        $(".filter,.platformWindow")
        .addClass("display");
    })

    $(".leftList .lang").on("click",function(){
        $(this)
        .removeClass("active");

        $(".jumpWindow,.leftList,.downList")
        .removeClass("display");

        $(".filter,.downList.lang")
        .addClass("display");
    })

    $(".leftList .remind").on("click",function(){
        $(this)
        .removeClass("active");

        $(".jumpWindow,.leftList,.downList")
        .removeClass("display");

        $(".filter,.firstWindow")
        .addClass("display");
    })

    $(".openBet").on("click",function(){
        $(".jumpWindow,.leftList,.downList")
        .removeClass("display");

        $(".filter,.agentWindow.bet")
        .addClass("display");
    })
    $(".openCost").on("click",function(){
        $(".jumpWindow,.leftList,.downList")
        .removeClass("display");

        $(".filter,.agentWindow.cost")
        .addClass("display");
    })
})