const app = document.getElementById('app');

// Dados iniciais
let books = [
  { id: 1, title: "Fanfic: Quando Yuji Encontrou Catiça", category: "Fanfic", content: "Era uma vez eu e ela..." },
  { id: 2, title: "Romance em Paris", category: "Romance", content: "Um romance mágico..." },
  { id: 3, title: "Fantasia do Reino Perdido", category: "Fantasia", content: "Dragões e aventuras..." },
  { id: 4, title: "Drama de Corações", category: "Drama", content: "Lágrimas e segredos..." }
];

function renderApp() {
  app.innerHTML = `
    <h1>Para Nós Dois 💖</h1>
    <h3>Biblioteca do Amor</h3>
    <div>
      <label>Filtrar por categoria:</label>
      <select id="filter">
        <option value="All">Todas</option>
        <option value="Romance">Romance</option>
        <option value="Fantasia">Fantasia</option>
        <option value="Drama">Drama</option>
        <option value="Fanfic">Fanfic</option>
      </select>
    </div>
    <div id="books-list"></div>
    <h2>Calendário do Nosso Amor 💞</h2>
    <p>Nosso namoro começou em <strong>18/12/2024</strong></p>
  `;

  const filter = document.getElementById('filter');
  const booksList = document.getElementById('books-list');

  function renderBooks(category) {
    booksList.innerHTML = '';
    let filtered = category === 'All' ? books : books.filter(b => b.category === category);
    filtered.forEach(book => {
      let div = document.createElement('div');
      div.className = 'book-card';
      div.innerHTML = `<h3>${book.title}</h3><p>${book.content}</p>`;
      booksList.appendChild(div);
    });
  }

  filter.addEventListener('change', (e) => renderBooks(e.target.value));
  renderBooks('All');
}

renderApp();