$(document).ready(function() {
    refreshStuff();
    $("form").submit(function(event) {
        event.preventDefault();
        var tegevusTitle = $("#messageTitle").val();
        var tegevus = $("#message").val();
        var submit = $("#save").val();
        var expireDate = $("#date").val();
        $(".form-message").load("server.php", {
            tegevusTitle: tegevusTitle,
            tegevus: tegevus,
            expireDate: expireDate,
            submit: submit
        });
        refreshStuff();
    });
});

function deleteRow(id){
    console.log("calling deleteRow: " + id);
    $.ajax({
        type:'POST',
        url:'delete.php',
        data: {delete_id: id},
        success: function() {
            refreshStuff();
        }
    });
}

function refreshStuff() {
    $.ajax({    //create an ajax request to display.php
        type: "GET",
        url: "showdata.php",
        dataType: "html",   //expect html to be returned
        success: function (response) {
            $("#responsecontainer").html(response);
            //alert(response);
        }
    });
    $("#messageTitle, #message, #date").val("");
}
