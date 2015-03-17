var main = function(){
    $("#preamble").click(function(){
        if ($("#index").text() === "X"){
            $("#preamble").animate({
                right: "0px"
            },200);
            $("#preamble").removeClass("showMenu");
            $("#index").text("Indice");

            $("#table-of-contents").animate({
                right: "-200px"
            }, 200);

            $('body').animate({
                width: "100%"
            }, 200);
        }
        else {
            $("#preamble").animate({
                right: "200px"
            },200);
            $("#preamble").addClass("showMenu");
            $("#index").text("X");

            $("#table-of-contents").animate({
                right: "0px"
            }, 200);

            $('body').animate({
                width: "80%"
            }, 200);
        }
    });
}


$(document).ready(main);
