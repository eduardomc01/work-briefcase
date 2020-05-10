/*
$(document).ready(function () {
    $(document).button(function (event) {

        console.log(event.button);
        //console.log("X: " + event.pageX + " Y:" + event.pageY);

    });
});
*/

$(document).ready(function () { /* When the page is load */

    $("#fade-in-1, #fade-in-2, #fade-in-3, #fade-in-4, #fade-in-5").fadeIn("fast");
    $("img").fadeIn("fast");

    if (localStorage.getItem("mode", "black") == "black"){
        $("body").css("background-color", "rgba(1,1,1,.8)");

    }

    $("#lightbulb").click(function () {
        localStorage.setItem("mode", "light");
        $("body").css("background-color", "white");

    });

    $("#moon").click(function () {
        localStorage.setItem("mode", "black");
        $("body").css("background-color", "rgba(1,1,1,.8)");

    });

});


$(document).ready(function () {

    $("#menuMovil").click(function () {

        $(".menu ul a li").slideToggle("fast");

    });

});


$(document).ready(function () {

    $(".signIn").css("display", "none");

    $("#sign-in .sign-in").click(function () {

        $(".signIn").slideToggle("fast");

    });

});


$(document).ready(function () {

    $(".group-icons").css("display", "none");

    $("#btnShowIcons").click(function () {

        $(".group-icons").slideToggle("fast");

    });

});

// VISIT NOTIFICATIONS

$(document).ready(function (){

    $(".menu a li .notify").click(function (){

       $(".notify").css("color","white");

    });

});


