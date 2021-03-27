import { createMuiTheme } from '@material-ui/core/styles'
// import purple from '@material-ui/core/colors/purple'
// import green from '@material-ui/core/colors/green'

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#2a292e',
    },
    primary: {
      main: '#fdff88',
    },
  },
  typography: {
    fontFamily: 'IBM Plex Mono, monospace',
    'fontSize': 14,
    'fontWeightLight': 300,
    'fontWeightRegular': 400,
    'fontWeightMedium': 500,
  },
})
