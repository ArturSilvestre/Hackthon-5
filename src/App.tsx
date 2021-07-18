import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import { Routes } from './routes';

export function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </div>
  );
}
