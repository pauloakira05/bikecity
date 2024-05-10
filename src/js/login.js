function verificador() {
    var campo1 = document.getElementById("email").value;
    var campo2 = document.getElementById("Senha").value;

    if (campo1 !== "" && campo2 !== "") {
        window.location.href = "/src/pages/quiz.html";
    } else {
        alert("ATENÇÃO! Os campos precisam ser preenchidos.");
    }
}
