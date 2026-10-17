/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        bg:           '#141414',
        surface:      '#1c1d1d',
        border:       '#272828',
        'border-light':'#333434',
        red:          '#eb0028',
        'red-dim':    'rgba(230,43,30,0.15)',
        text:         '#f0ede8',
        'text-dim':   '#a8a8a8',
        'text-muted': '#b8ab96',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        serif:   ['Playfair Display', 'serif'],
        body:    ['Be Vietnam Pro', 'sans-serif'],
      },
      maxWidth: { brand: '1280px' },
      transitionTimingFunction: {
        'brand-out':    'cubic-bezier(.165,.84,.44,1)',
        'brand-in-out': 'cubic-bezier(.455,.03,.515,.955)',
      },
      transitionDuration: {
        fast:   '160',
        base:   '240',
        reveal: '900',
      },
    },
  },
};
