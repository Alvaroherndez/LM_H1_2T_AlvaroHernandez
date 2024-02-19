function copiar() {
    var codigo = document.querySelector(".caja-codigo pre code").textContent;
    navigator.clipboard.writeText(codigo);
    alert("¡Código copiado!");
  }
  