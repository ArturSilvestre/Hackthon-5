import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import { Routes } from './routes';

import ToastContainer from './components/ToastContainer';
import { AuthProvider } from './hooks/AuthContext';

export function App(): JSX.Element {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AuthProvider>
      <GlobalStyle />
      <ToastContainer />
    </div>
  );
}
