import { GlobalStyles } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './Routes';
import Modal from 'react-modal';
import { HelmetProvider } from 'react-helmet-async';
import '@/translate/i18n';
import { AppProvider } from './contexts';
Modal.setAppElement(document.getElementById('root') as HTMLElement);
function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <AppProvider>
            <AppRoutes />
          </AppProvider>
        </BrowserRouter>
        <GlobalStyles />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
