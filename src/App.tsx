// src/App.tsx
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme/theme';
import Timer from './components/Timer';
import CountdownTimer from './components/Countdown';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <div>
        <Timer />
        <CountdownTimer />
      </div>
    </ThemeProvider>
  );
};

export default App;
