const btn = document.getElementById('gerarBtn');
const input = document.getElementById('codigo');
let canGenerate = true;

function gerarCodigo() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let codigo = '';
  for(let i = 0; i < 8; i++) {
    codigo += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return codigo;
}

btn.addEventListener('click', () => {
  if (!canGenerate) {
    alert('Aguarde 30 segundos para gerar um novo código.');
    return;
  }

  const novoCodigo = gerarCodigo();
  input.value = novoCodigo;
  canGenerate = false;
  btn.disabled = true;

  setTimeout(() => {
    canGenerate = true;
    btn.disabled = false;
  }, 30000);
});
