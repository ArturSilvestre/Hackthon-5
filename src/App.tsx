import SignIn from './pages/SignIn';
// import ForgotPassword from './pages/ForgotPassword';
// import Dashboard from './pages/Dashboard';
import GlobalStyle from './styles/global';

import AuthContext from './context/AuthContext';

export function App(): JSX.Element {
  return (
    <div className="App">
      <AuthContext.Provider value={{ name: 'Pedro Lima Reis' }}>
        <SignIn />
        {/* <ForgotPassword /> */}
        {/* <Dashboard /> */}
      </AuthContext.Provider>
      <GlobalStyle />
    </div>
  );
}
