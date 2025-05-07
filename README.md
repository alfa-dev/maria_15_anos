# Maria's 15th Birthday Gift Suggestions Hotsite

This is a creative and responsive hotsite designed to help guests choose gifts for Maria's 15th birthday celebration. The site features a Michael Jackson theme with retro aesthetics from the 80s and 90s, incorporating elements of vinyl records and books.

## Features

- Responsive design that works on both desktop and mobile devices
- Beautiful animations and transitions
- Interactive vinyl record and book displays with images
- Background music player (optional)
- Parallax scrolling effects
- Retro-styled polaroid images
- Glitter text effects

## Setup

1. Clone this repository to your local machine
2. Create an `assets` folder in the root directory with the following structure:
   ```
   assets/
   ├── hero-bg.jpg
   ├── mj-placeholder.jpg
   ├── background-music.mp3
   ├── vinis/
   │   ├── ideologia.jpg
   │   ├── exagerado.jpg
   │   ├── so-se-for-a-dois.jpg
   │   ├── dangerous.jpg
   │   ├── bad.jpg
   │   ├── off-the-wall.jpg
   │   ├── history.jpg
   │   ├── secos-e-molhados.jpg
   │   ├── falso-brilhante.jpg
   │   ├── o-tempo-nao-para.jpg
   │   ├── maior-abandonado.jpg
   │   ├── barao-vermelho-2.jpg
   │   └── a-night-at-the-opera.jpg
   └── livros/
       ├── evelyn-hugo.jpg
       ├── melhor-que-nos-filmes.jpg
       ├── ate-o-verao-terminar.jpg
       ├── the-woman-in-me.jpg
       ├── moonwalk.jpg
       ├── todas-suas-imperfeicoes.jpg
       ├── uma-segunda-chance.jpg
       ├── 9-de-novembro.jpg
       └── lado-feio-do-amor.jpg
   ```

3. Add appropriate images for each vinyl record and book in their respective folders
   - Vinyl images should be square (1:1 aspect ratio)
   - Book images should be in portrait orientation (recommended 2:3 aspect ratio)
   - All images should be optimized for web (recommended size: 500-800px width)

## Image Requirements

### Vinyl Images
- Format: JPG or PNG
- Aspect Ratio: 1:1 (square)
- Recommended Size: 500x500px
- Content: Album cover art

### Book Images
- Format: JPG or PNG
- Aspect Ratio: 2:3 (portrait)
- Recommended Size: 500x750px
- Content: Book cover art

### Other Images
- hero-bg.jpg: A high-quality background image (recommended: 1920x1080px)
- mj-placeholder.jpg: Michael Jackson themed image (recommended: 800x600px)
- background-music.mp3: Background music file (preferably a Michael Jackson instrumental)

## Customization

The gift suggestions are stored in the `presenteData` object in `script.js`. You can modify this object to update the list of suggested gifts and their corresponding images.

## Browser Support

The site is compatible with modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Development

The site is built with vanilla HTML, CSS, and JavaScript, requiring no build tools or frameworks. To make changes:

1. Edit the HTML in `index.html` for structure changes
2. Modify `styles.css` for styling updates
3. Update `script.js` for functionality changes
4. Add or replace images in the assets folder as needed

## Credits

- Fonts from Google Fonts
- Icons and emojis for music player
- Vanilla JavaScript for all interactions
- CSS animations and transitions for smooth effects

## License

This project is created specifically for Maria's 15th birthday celebration.