const HEATMAP_WIDTH = 1114;
const HEATMAP_DAY_WIDTH = 154;

const theme = {
  color: {
    text: '#636363',
    dark: '#000000',
    midDark: '#636363',
    midLight: '#93918F',
    light: '#ffffff',
    blue: '#3c88d5',
    apricotYellow: '#FDB755',

    heatmap: {
      dayBackground: '#1e2537',
      hourBackground: [
        '#e0e592',
        '#aed396',
        '#a9d194',
        '#a0ce93',
        '#99cd94',
        '#8cc894',
        '#5eb391',
        '#5db492',
        '#5cb391',
        '#5aad8c',
        '#3984a3',
      ],
      hourHoverBorder: '#1e2537',
      headerHour: '#787878',
      headerBorder: '#f3f3f3',
      headerBackground: 'linear-gradient(to bottom, #fefefe, #e9e9e9)',
    },
  },
  font: {
    family: {
      default: '"Montserrat", sans-serif',
      headline: '"Bitter", serif',
    },
    size: {
      default: '16px',
      small: '14px',
      medium: '18px',
      large: '24px',
      extraLarge: '38px',
      heatmap: {
        width: HEATMAP_WIDTH,
        headerHeight: 52,
        dayWidth: HEATMAP_DAY_WIDTH,
        hour: (HEATMAP_WIDTH - HEATMAP_DAY_WIDTH) / 24,
      },
    },
    lineHeight: {
      default: 1.69,
    },
    letterSpacing: {
      default: '0.3px',
      heading: 'normal',
    },
  },
};
export default theme;
