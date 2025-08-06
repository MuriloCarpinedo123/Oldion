

const likeBtn = document.querySelector('.like');
const dislikeBtn = document.querySelector('.dislike');
const verGostosBtn = document.querySelector('.ver-gostos');

likeBtn.addEventListener('click', () => {
  alert('Você gostou do usuário recomendado!');
});

dislikeBtn.addEventListener('click', () => {
  alert('Você não gostou do usuário recomendado.');
});

verGostosBtn.addEventListener('click', () => {
  alert('Exibindo gostos do usuário recomendado...');
});
