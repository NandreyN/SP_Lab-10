$(document).ready(function () {
    $(".round_nav").mouseenter(function (e) {
        var id = $(e.target).attr('id');
        $("#" + id).css("background", "green");
    }).mouseleave(function (e) {
        var id = $(e.target).attr('id');
        $("#" + id).css("background", "red");
    });
    $('a').click(function () {
        var names = ["a-task", "b-task", "c-task"];
        for (i = 0; i < names.length; i++) {
            $("#" + names[i]).css("background", "red");
        }
    });
});