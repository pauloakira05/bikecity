function exibirMensagemDeBoasVindas() {
    alert("Seja bem-vindo ao nosso site! Estamos aqui para tornar sua experiência incrível.");
}

function mudarCorDeFundoContinuamente() {
    var cores = ["#9999FF", "#99FF99", "#FFFF99"];
    
    setInterval(function() {
        var corEscolhida = cores[Math.floor(Math.random() * cores.length)];
        
        document.body.style.backgroundColor = corEscolhida;}, 1500);
}

window.onload = function() {
    exibirMensagemDeBoasVindas();
    mudarCorDeFundoContinuamente();
};