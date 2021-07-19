/* eslint-disable @typescript-eslint/ban-types */
import React, {
  createContext,
  useCallback,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from 'react';
import api from '../services/api';

interface AuthContextProps {
  user: {
    first_name: string;
    last_name: string;
  };
  signIn(data: AuthState): Promise<void>;
  signOut(): void;
  newAcount(data: AuthState): Promise<void>;
  isAuthenticated: boolean;
}

interface AuthState {
  token: string;
  user: {
    first_name: string;
    last_name: string;
  };
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
      api.defaults.headers.Authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ token, user }) => {
    localStorage.setItem('@EcoFranca:token', token);
    localStorage.setItem('@EcoFranca:user', JSON.stringify(user));

    api.defaults.headers.Authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@EcoFranca:token');
    localStorage.removeItem('@EcoFranca:user');

    delete api.defaults.headers.Authorization;
    setData({} as AuthState);
  }, []);

  const newAcount = useCallback(async ({ token, user }) => {
    api.defaults.headers.Authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  useEffect(() => {
    const id = api.interceptors.response.use(value => {
      if (value.status === 401) {
        signOut();
      }
      return value;
    });

    return () => {
      api.interceptors.response.eject(id);
    };
  }, [data, signOut]);

  const isAuthenticated = !!data.user;

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, isAuthenticated, newAcount }}
    >
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
