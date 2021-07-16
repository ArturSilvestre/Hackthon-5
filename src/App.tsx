import { ForgotPassword } from './pages/ForgotPassword';
import { SignIn } from './pages/SignIn';
import { GlobalStyle } from './styles/global';
export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <SignIn />
      <ForgotPassword />
    </div>
  );
}
