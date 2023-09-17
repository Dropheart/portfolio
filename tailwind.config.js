module.exports = {
    content: ["./pages/*.{html,js}"],
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
    plugins: [require("daisyui")],
    daisyui: {
      themes: [
        {
          mytheme: {
            "primary": "#231f1f",
            "secondary": "#d9d9d9",
            "accent": "#1fb2a6",
            "neutral": "#2a323c",
            "base-100": "#231f1f",
            "info": "#3abff8",
            "success": "#36d399",
            "warning": "#fbbd23",
            "error": "#f87272",
          },
        },
      ]
    }
  }