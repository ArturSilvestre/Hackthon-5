import SignIn from './pages/SignIn';
// import ForgotPassword from './pages/ForgotPassword';
// import Dashboard from './pages/Dashboard';
import GlobalStyle from './styles/global';

export function App(): JSX.Element {
  return (
    <div className="App">
      <GlobalStyle />
      <SignIn />
      {/*  <ForgotPassword /> */}
      {/* <Dashboard />  */}
    </div>
  );
}
