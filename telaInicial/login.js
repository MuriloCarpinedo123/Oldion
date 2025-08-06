const usuarios = [
  { nome: "Lucas", img: "https://randomuser.me/api/portraits/men/31.jpg" },
  { nome: "Maria", img: "https://randomuser.me/api/portraits/women/33.jpg" },
  { nome: "Carlos", img: "https://randomuser.me/api/portraits/men/47.jpg" },
  { nome: "Fernanda", img: "https://randomuser.me/api/portraits/women/29.jpg" },
  { nome: "João", img: "https://randomuser.me/api/portraits/men/56.jpg" },
  { nome: "Patrícia", img: "https://randomuser.me/api/portraits/women/55.jpg" },
  { nome: "Ricardo", img: "https://randomuser.me/api/portraits/men/63.jpg" },
  { nome: "Tatiane", img: "https://randomuser.me/api/portraits/women/62.jpg" },
  { nome: "Eduardo", img: "https://randomuser.me/api/portraits/men/71.jpg" },
  { nome: "Aline", img: "https://randomuser.me/api/portraits/women/75.jpg" },
];

let index = 0;

const usuarioImg = document.getElementById('usuario-img');
const likeBtn = document.querySelector('.like');
const dislikeBtn = document.querySelector('.dislike');
const verGostosBtn = document.querySelector('.ver-gostos');

function mostrarUsuario(i) {
  usuarioImg.classList.remove('fade-in');
  setTimeout(() => {
    usuarioImg.src = usuarios[i].img;
    usuarioImg.alt = usuarios[i].nome;
    usuarioImg.classList.add('fade-in');
  }, 200);
}

likeBtn.addEventListener('click', avancarUsuario);
dislikeBtn.addEventListener('click', avancarUsuario);

verGostosBtn.addEventListener('click', () => {
  alert(`Exibindo gostos de ${usuarios[index].nome}...`);
});

function avancarUsuario() {
  index = (index + 1) % usuarios.length;
  mostrarUsuario(index);
}

// Modal Logout
const logoutButton = document.querySelector('button[aria-label="Sair"]');
const logoutModal = document.getElementById('logout-modal');
const confirmLogout = document.getElementById('confirm-logout');
const cancelLogout = document.getElementById('cancel-logout');

logoutButton.addEventListener('click', () => {
  logoutModal.style.display = 'flex';
});

confirmLogout.addEventListener('click', () => {
  window.location.href = 'login.html';
});

cancelLogout.addEventListener('click', () => {
  logoutModal.style.display = 'none';
});

// Inicializar primeiro usuário
mostrarUsuario(index);
