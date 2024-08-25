$(document).ready(function () {

    $("#enviarMsje").click(function () {

        if ($("#inputNombre").val() == "") {

            alert("Olvidaste ingresar tu nombre");
            $("#inputNombre").focus();
        } 
        else if($("#inputCorreo").val() == "") {

            alert("Olvidaste ingresar tu correo");
            $("#inputCorreo").focus();
        }
        else if($("#inputMensaje").val() == ""){

            alert("Olvidaste ingresar tu Mensaje");
            $("#inputMensaje").focus();
        }
        else{

            $("#mostrarNombre").text($("#inputNombre").val());
            $("#respuestaContacto").toggle();
        }
    });

    $(".btn-close").click(function () {
        $("#respuestaContacto").hide();
        limpiarForm();
    });

    $(".text-body-secondary").click(function () {
        $("#respuestaContacto").hide();
        limpiarForm();
    });

    function limpiarForm(){
        $("#inputNombre").val("");
        $("#inputCorreo").val("");
        $("#inputMensaje").val("");
    }
});