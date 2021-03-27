import { createMuiTheme } from '@material-ui/core/styles'
// import purple from '@material-ui/core/colors/purple'
// import green from '@material-ui/core/colors/green'

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: {
    'fontFamily': '"Roboto", "Helvetica", "Arial", sans-serif',
    'fontSize': 14,
    'fontWeightLight': 300,
    'fontWeightRegular': 400,
    'fontWeightMedium': 500,
  },
})
