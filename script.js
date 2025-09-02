const toggleSenha = document.getElementById("toggleSenha");
const campoSenha = document.getElementById("senha");

toggleSenha.addEventListener("click", () => {
  const tipo = campoSenha.type === "password" ? "text" : "password";
  campoSenha.type = tipo;

  // Troca o ícone quando mostrar/esconder
  toggleSenha.textContent = tipo === "password" ? "*" : "👁";
});


