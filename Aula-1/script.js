$(document).ready(function () {
    $("input[name=cep]").mask("00000-000");
    $("form").on("submit", function (event) {
        event.stopPropagation();
        event.preventDefaul();
    });

    $("input[name=cep]").on("keyup", function (event) {
        let cep = $("input[name=cep]").val();
        cep = cep.replace("-", "");
        if (cep.length == 8) {
            $("input[name=cep]").removeClass("is-invalid");
            alert(cep);
        } else {
            $("input[name=cep]").addClass("is-invalid");
        }
    });
});
