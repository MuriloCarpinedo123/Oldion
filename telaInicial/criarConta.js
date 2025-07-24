document.addEventListener("DOMContentLoaded", function () {
  const botaoCriar = document.getElementById("botao-criar");
  const nome = document.getElementById("input-nome");
  const email = document.getElementById("input-email");
  const senha = document.getElementById("input-senha");

  const erroNome = document.getElementById("erro-nome");
  const erroEmail = document.getElementById("erro-email");
  const erroSenha = document.getElementById("erro-senha");

  botaoCriar.addEventListener("click", function (event) {
    let formValido = true;

    if (nome.value.trim() === "") {
      erroNome.style.display = "block";
      formValido = false;
    } else {
      erroNome.style.display = "none";
    }

    if (email.value.trim() === "") {
      erroEmail.style.display = "block";
      formValido = false;
    } else {
      erroEmail.style.display = "none";
    }

    if (senha.value.trim() === "") {
      erroSenha.style.display = "block";
      formValido = false;
    } else {
      erroSenha.style.display = "none";
    }

    if (!formValido) {
      event.preventDefault();
    } else {
      console.log("Todos os campos preenchidos!");
      // Aqui você pode redirecionar ou enviar dados
    }
  });
});
