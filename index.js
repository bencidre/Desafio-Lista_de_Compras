let contador = document.querySelectorAll('.lista-compras .item').length + 1;

// Referências principais
const addButton = document.getElementById('add-item-button');
const input = document.getElementById('itemInput');
const lista = document.querySelector('.lista-compras');
const aviso = document.getElementById('aviso-remocao');

// Função para mostrar aviso
function mostrarAviso() {
  aviso.style.display = 'flex';
  aviso.style.opacity = '1';

  // Oculta após 3 segundos
  setTimeout(() => {
    aviso.style.opacity = '0';
    aviso.style.display = 'none';
  }, 3000);
}

// Função para remover item
function adicionarEventoRemover(botao) {
  botao.addEventListener('click', function () {
    this.parentElement.remove();
    mostrarAviso();
  });
}

// Adiciona evento nos ícones de lixeira existentes
document.querySelectorAll('.junk').forEach(adicionarEventoRemover);

// Evento de adicionar item novo
addButton.addEventListener('click', () => {
  const valor = input.value.trim();
  if (valor === '') return;

  const id = `item${contador++}`;

  // Criação da estrutura
  const divItem = document.createElement('div');
  divItem.className = 'item flex';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = id;

  const label = document.createElement('label');
  label.htmlFor = id;
  label.textContent = valor;

  const img = document.createElement('img');
  img.src = './assets/junk.svg';
  img.alt = 'delete';
  img.className = 'junk';

  adicionarEventoRemover(img);

  // Monta estrutura
  divItem.appendChild(checkbox);
  divItem.appendChild(label);
  divItem.appendChild(img);
  lista.appendChild(divItem);

  input.value = '';
});
