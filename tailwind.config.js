module.exports = {
    content: ["./*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
          'hanuman': ['Hanuman', 'serif']
        },
        colors: {
          'grey': '#d9d9d9',
          'dark-bg': '#231f1f'
        },
        maxHeight: {
          '1440': '1400px'
        }
      },
      container: {
        center: true,
      }
    },
    plugins: [],
  }