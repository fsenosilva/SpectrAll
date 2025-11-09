    tailwind.config = {
      theme: {
        fontFamily: {
          sans: ['Oswald', 'sans-serif'],
        },
        extend: {
          colors: {
            brand: '#8ddcab',
            brand2: '#c0f0b0',
            dark: '#0f172a',
            headings: '#70b088',
            ntext: '#595959'

          },
          backgroundColor: {
            'grid': 'rgb(255, 255, 255)',
            'green-gray': 'rgba(112, 176, 136, 0.15)',
          },
          backgroundImage: {
            'grid': 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px)',
          },
          backgroundSize: {
            'grid': '8px 8px',
          }
        },
      },
    };
