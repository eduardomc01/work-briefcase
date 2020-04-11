
$(document).ready(function () { /* When the page is load */

    $("#fade-in-1, #fade-in-2, #fade-in-3, #fade-in-4, #fade-in-5").fadeIn(2000);
    $("img").fadeIn(2000);

    if (localStorage.getItem("mode", "black") == "black")
        $("body").css("background-color", "rgba(1,1,1,.8)");

    $("#btn1").click(function () {

        localStorage.setItem("mode", "light");
        $("body").css("background-color", "white");


    });

    $("#btn2").click(function () {

        localStorage.setItem("mode", "black");
        $("body").css("background-color", "rgba(1,1,1,.8)");

    });

});


$(document).ready(function () { /* When the page is load */

    $("#moveAppearDisappear").css("display","none");

    $("#btnShowButtons").click(function () {

        $("#moveAppearDisappear").fadeIn("2000");

    });

});
