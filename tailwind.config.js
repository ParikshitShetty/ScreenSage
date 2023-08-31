/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {  
      backgroundImage: {
        'got': "url(http://m.gettywallpapers.com/wp-content/uploads/2020/04/Game-of-Thrones-Wallpaper-For-PC.jpg)",
        'avengers': "url(https://r4.wallpaperflare.com/wallpaper/296/400/37/movie-avengers-infinity-war-black-panther-movie-black-widow-wallpaper-49f0f89d41ba3debf667380fb061667d.jpg)",
        'back' :"url(https://m.media-amazon.com/images/M/MV5BNWNmYzQ1ZWUtYTQ3ZS00Y2UwLTlkMDctZThlOTJkMGJiNzBiXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg)"
      },
      backgroundSize:{
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '16': '4rem'
      }
    },
  },
  plugins: [],
}