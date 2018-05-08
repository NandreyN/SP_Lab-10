$(document).ready(function () {
    $("#student_input").on("submit", function (event) {
        var surname = $("#surname").val();
        var email = $("#email").val();
        var news = $("#agree").attr("checked") == 'checked';
        var age = $("#ageCategory").val();

        if (surname === "" || email === "" || news === "") {
            event.preventDefault();
            alert("Fill in the fields");
            return;
        }

        var genderRadio = $("[name='gender']");
        var selected;
        for (var i = 0; i < genderRadio.length; i++) {
            if (genderRadio[i].checked)
                selected = genderRadio[i].value;
        }

        var record = {
            'surname': surname,
            'email': email,
            'news': news,
            'age': age,
            'gender': selected
        };
        sessionStorage.setItem('student', record);
        alert("Record added : " + JSON.stringify(record));
    });

    $("#student_input").on("reset", function () {
        $("#list").html("");
        alert("Cleared");
    });

    function handleFileSelect(evt) {
        var files = evt.target.files; 
        
        var output = [];
        for (var i = 0, f; f = files[i]; i++) {
            output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                f.size, ' bytes, last modified: ',
                f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                '</li>');
        }
        document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
    }

    document.getElementById('files').addEventListener('change', handleFileSelect, false);
});