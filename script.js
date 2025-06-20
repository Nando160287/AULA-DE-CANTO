function mostrarAba(id) {
  const secoes = document.querySelectorAll('.conteudo');
  secoes.forEach(secao => secao.classList.remove('active'));

  const abaAtiva = document.getElementById(id);
  if (abaAtiva) {
    abaAtiva.classList.add('active');
  }
}

// Mostrar a aba "Quem sou eu" ao carregar
document.addEventListener('DOMContentLoaded', () => {
  mostrarAba('quem');
});
