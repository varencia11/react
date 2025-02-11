import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff', 
    },
    secondary: {
      main: '#e91e63', 
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
  },
});

export default theme;
