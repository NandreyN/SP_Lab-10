$(document).ready(function () {
    $("#student_input").on("submit", function (event) {
        var surname = $("#surname").val();
        var email = $("#email").val();
        var news = $("#news").val();
        var age = $("#ageCategory").val();
        if (surname === "" || email === "" || news === "") {
            event.preventDefault();
            return;
        }

        var record = {
            'surname': surname,
            'email': email,
            'news': news,
            'age': age
        };
        sessionStorage.setItem('student', record);
        alert("Record added");
    });

    $("#student_input").on("reset", function () {
        alert("Cleared");
    });
});