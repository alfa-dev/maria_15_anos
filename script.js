// Gift data object
const presenteData = {
  vinis: [
    {
      titulo: "Ideologia (Cazuza)",
      imagem: "assets/vinis/ideologia.jpg"
    },
    {
      titulo: "Exagerado (Cazuza)",
      imagem: "assets/vinis/exagerado.jpeg"
    },
    {
      titulo: "Só se for a dois (Cazuza)",
      imagem: "assets/vinis/so-se-for-a-dois.jpg"
    },
    {
      titulo: "Dangerous (Michael Jackson)",
      imagem: "assets/vinis/dangerous.jpg"
    },
    {
      titulo: "Bad (Michael Jackson)",
      imagem: "assets/vinis/bad.jpg"
    },
    {
      titulo: "Off The Wall (Michael Jackson)",
      imagem: "assets/vinis/otw.jpg"
    },
    {
      titulo: "HIStory (Michael Jackson)",
      imagem: "assets/vinis/history.jpg"
    },
    {
      titulo: "A volta dos Secos & Molhados (Secos & Molhados)",
      imagem: "assets/vinis/secos-e-molhados.jpg"
    },
    {
      titulo: "Falso Brilhante (Elis Regina)",
      imagem: "assets/vinis/falso-brilhante.jpg"
    },
    {
      titulo: "O Tempo não Pára (Ao vivo) (Cazuza)",
      imagem: "assets/vinis/o-tempo-nao-para.jpg"
    },
    {
      titulo: "Maior Abandonado (Barão Vermelho)",
      imagem: "assets/vinis/maior-abandonado.jpg"
    },
    {
      titulo: "Barão Vermelho 2 (Barão Vermelho)",
      imagem: "assets/vinis/barao-vermelho-2.jpg"
    },
    {
      titulo: "A Night At The Opera (Queen)",
      imagem: "assets/vinis/a-night-at-the-opera.jpg",
      escolhido: true
    }
  ],
  livros: [
    {
      titulo: "Os Sete Maridos de Evelyn Hugo (Taylor Jenkins Reid)",
      imagem: "assets/livros/evelyn-hugo.webp"
    },
    {
      titulo: "Melhor do que nos filmes (Lynn Painter)",
      imagem: "assets/livros/melhor-que-nos-filmes.webp"
    },
    {
      titulo: "Até o verão terminar (Colleen Hoover)",
      imagem: "assets/livros/ate-o-verao-terminar.webp"
    },
    {
      titulo: "The Woman in Me (Britney Spears)",
      imagem: "assets/livros/the-woman-in-me.jpeg"
    },
    {
      titulo: "Moonwalk (Michael Jackson)",
      imagem: "assets/livros/moonwalk.jpg"
    },
    {
      titulo: "Todas as suas imperfeições (Colleen Hoover)",
      imagem: "assets/livros/todas-suas-imperfeicoes.webp"
    },
    {
      titulo: "Uma segunda chance (Colleen Hoover)",
      imagem: "assets/livros/uma-segunda-chance.jpg"
    },
    {
      titulo: "9 de Novembro (Colleen Hoover)",
      imagem: "assets/livros/9-de-novembro.jpg"
    },
    {
      titulo: "O Lado Feio do Amor (Colleen Hoover)",
      imagem: "assets/livros/lado-feio-do-amor.jpg"
    }
  ],
  outros: [
    "Tamanho de Roupa: P",
    "Tamanho de Calçado: 36/37"
  ]
};

const michaels = [
  'be-careful-with-what-you-do-michael-jackson',
  'dah_bzsc6W8',
  'gonwitdabad',
  'ho_ImSV02p',
  'hoooo',
  'michael-jackson-vocal',
  'mp3download_zgIWEmK',
  'oooooohhhh'
];

document.getElementById('michael-jackson-foto').addEventListener('click', () => {
  const michael = michaels[Math.floor(Math.random() * michaels.length)];

  //play sound
  const audio = new Audio(`assets/michaels/${michael}.mp3`);
  audio.volume = 0.5;
  audio.play();
});


// Function to create vinyl items
function createVinylItem(vinyl) {
  const item = document.createElement('div');
  const vinylDiscContainer = document.createElement('div');
  item.className = `vinyl-item ${vinyl.escolhido ? 'vinyl-item-selected' : ''}`;

  const imageContainer = document.createElement('div');
  imageContainer.className = 'vinyl-image';

  const img = document.createElement('img');
  img.src = vinyl.imagem;
  img.alt = vinyl.titulo;
  img.loading = 'lazy';
  imageContainer.appendChild(img);

  const content = document.createElement('div');
  content.className = `vinyl-content`;
  content.textContent = vinyl.titulo;

  vinylDiscContainer.className = 'vinyl-disc';

  const copyButton = document.createElement('button');
  copyButton.className = 'copy-button fa-solid fa-copy';
  copyButton.title = 'Copiar nome';
  copyButton.setAttribute('aria-label', 'Copiar nome');
  copyButton.setAttribute('aria-live', 'polite');
  copyButton.setAttribute('aria-atomic', 'true');

  copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(vinyl.titulo);
    copyButton.classList.add('fa-check');
    copyButton.classList.remove('fa-copy');
    copyButton.classList.add('copied');

    setTimeout(() => {
      copyButton.classList.remove('fa-check');
      copyButton.classList.add('fa-copy');
      copyButton.classList.remove('copied');
    }, 2000);
  });

  const searchButton = document.createElement('button');
  searchButton.className = 'search-button fa-solid fa-magnifying-glass';
  searchButton.title = 'Pesquisar no Google';
  searchButton.setAttribute('aria-label', 'Pesquisar no Google');
  searchButton.setAttribute('aria-live', 'polite');
  searchButton.setAttribute('aria-atomic', 'true');

  //search button shopping
  searchButton.addEventListener('click', () => {
    const searchQuery = `Vinil ${encodeURIComponent(vinyl.titulo)}`;
    window.open(`https://www.google.com/search?q=${searchQuery}`, '_blank');
  });

  item.appendChild(imageContainer);
  item.appendChild(content);
  item.appendChild(vinylDiscContainer);
  item.appendChild(copyButton);
  item.appendChild(searchButton);
  return item;
}

// Function to create book items
function createBookItem(book) {
  const item = document.createElement('div');
  item.className = 'book-item';

  const imageContainer = document.createElement('div');
  imageContainer.className = 'book-image';

  const img = document.createElement('img');
  img.src = book.imagem;
  img.alt = book.titulo;
  imageContainer.appendChild(img);

  const title = document.createElement('h4');
  title.className = `book-title ${book.escolhido ? 'book-title-selected' : ''}`;
  title.textContent = book.titulo;

  item.appendChild(imageContainer);
  item.appendChild(title);
  return item;
}

// Function to create other suggestion items
function createOtherItem(text) {
  const item = document.createElement('div');
  item.className = 'other-item';
  item.textContent = text;
  return item;
}

// Function to populate gift sections
function populateGiftSections() {
  const vinylSection = document.getElementById('vinyl-section');
  const bookSection = document.getElementById('books-section');
  const otherGrid = document.getElementById('other-section');

  const vinylTitle = document.createElement('h3');
  const bookTitle = document.createElement('h3');
  const otherTitle = document.createElement('h3');

  vinylTitle.textContent = 'Vinis';
  bookTitle.textContent = 'Livros';
  otherTitle.textContent = 'Roupas e calçados';

  vinylSection.appendChild(vinylTitle);
  bookSection.appendChild(bookTitle);
  otherGrid.appendChild(otherTitle);

  const otherContainer = document.createElement('div');
  otherContainer.className = 'other-container';

  presenteData.outros.forEach(other => {
    otherContainer.appendChild(createOtherItem(other));
  });

  presenteData.vinis.forEach(vinyl => {
    vinylSection.appendChild(createVinylItem(vinyl));
  });

  presenteData.livros.forEach(book => {
    bookSection.appendChild(createBookItem(book));
  });

  presenteData.outros.forEach(other => {
    otherGrid.appendChild(createOtherItem(other));
  });
}

// Music player functionality
function setupMusicPlayer() {
  const musicToggle = document.getElementById('toggleMusic');
  const bgMusic = document.getElementById('bgMusic');
  let isPlaying = false;

  musicToggle.addEventListener('click', () => {
    if (isPlaying) {
      bgMusic.pause();
      musicToggle.classList.remove('playing');
    } else {
      bgMusic.play();
      musicToggle.classList.add('playing');
    }
    isPlaying = !isPlaying;
  });
}
// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  populateGiftSections();
  observeSections();
  setupMusicPlayer();
  handleParallax();
});