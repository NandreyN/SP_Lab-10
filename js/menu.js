$(document).ready(function () {
    $(".round_nav").mouseenter(function (e) {
        var id = $(e.target).attr('id');
        $("#" + id).css("background", "green");
    }).mouseleave(function (e) {
        var id = $(e.target).attr('id');
        $("#" + id).css("background", "red");
    });
});