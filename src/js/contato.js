document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
  
    // Captura os valores dos campos
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
  
    // Aqui você pode fazer o que quiser com os valores capturados, como enviá-los para um servidor ou exibi-los na página
    console.log("Nome:", name);
    console.log("E-mail:", email);
    console.log("Telefone:", phone);
    console.log("Mensagem:", message);
  
    // Resetar o formulário após o envio
    document.getElementById("contact-form").reset();
  });
  