import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import { Routes } from './routes';

import AppProvider from './hooks';

export function App(): JSX.Element {
  return (
    <div className="App">
      <AppProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AppProvider>

      <GlobalStyle />
    </div>
  );
}
