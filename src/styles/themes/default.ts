export const defaultTheme = {
  colors: {
    input: '#040F1A',
    background: '#071422',
    profile: '#0B1B2B',
    post: '#112131',
    border: '#1C2F41',
    label: '#3A536B',
    span: '#7B96B2',
    text: '#AFC2D4',
    subtitle: '#C4D4E3',
    title: '#E7EDF4',
    blue: '#3294F8',
    markdownCodeText: '#D5DCE3'
  },
  fonts: {
    ['title-l']: {
      fontWeight: 700,
      fontSize: '1.5rem'
    },
    ['title-m']: {
      fontWeight: 700,
      fontSize: '1.25rem'
    },
    ['title-s']: {
      fontWeight: 700,
      fontSize: '1.125rem'
    },
    ['text-m']: {
      fontWeight: 400,
      fontSize: '1rem'
    },
    ['text-s']: {
      fontWeight: 400,
      fontSize: '0.875rem'
    },
    link: {
      fontWeight: 400,
      fontSize: '0.75rem'
    }
  }
} as const
