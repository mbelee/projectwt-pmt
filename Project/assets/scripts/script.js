$(document).ready(function() {
    $('#Form').submit(function(event) {
        event.preventDefault();

        //values from form
        var a = $('#a').val();
        var b = $('input[name="b"]:checked').val();
        var c = [];
        $('input[name="c"]:checked').each(function() {
            c.push($(this).val());
        });
        var d = $('#d').val();

        //new row
        var newRow = $('<tr><td>' + a + '</td><td>' + b + '</td><td>' + c.join(', ') + '</td><td>' + d + '</td></tr>');

        //append
        $('#results-table tbody').append(newRow);

        alert('Success');
    });
});