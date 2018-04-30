$(document).ready(function () {
    $("#student_input").on("submit", function () {
        var surname = $("#surname").val();
        var email = $("#email").val();
        var news = $("#news").val();
        var age = $("#ageCategory").val();
        var record= {
            'surname':surname,
            'email' : email,
            'news':news,
            'age':age
        };
        localStorage.setItem('student', record);
        alert(record);
    });

    $("#student_input").on("reset", function () {
        $("#surname").val("");
        $("#email").val("");
        $("#news").val("");
        $("#age").val("");
        alert("Cleared");
    });
});