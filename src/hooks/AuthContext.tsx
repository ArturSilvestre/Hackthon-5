/* eslint-disable @typescript-eslint/ban-types */
import React, {
  createContext,
  useCallback,
  ReactNode,
  useState,
  useContext,
} from 'react';
import api from '../services/api';

interface SignInCredencials {
  email: string;
  password: string;
}

interface AuthContextProps {
  user: object;
  signIn(credencials: SignInCredencials): Promise<void>;
  signOut(): void;
}

interface AuthState {
  token: string;
  user: object;
}

type AuthProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

function AuthProvider({ children }: AuthProps): JSX.Element {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@EcoFranca:token');
    const user = localStorage.getItem('@EcoFranca:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('emplowee/login', { email, password });

    const { token, user } = response.data;

    localStorage.setItem('@EcoFranca:token', token);
    localStorage.setItem('@EcoFranca:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@EcoFranca:token');
    localStorage.removeItem('@EcoFranca:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
