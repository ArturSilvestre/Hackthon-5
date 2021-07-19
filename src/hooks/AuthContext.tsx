/* eslint-disable @typescript-eslint/ban-types */
import React, {
  createContext,
  useCallback,
  ReactNode,
  useState,
  useContext,
} from 'react';

interface AuthContextProps {
  user: object;
  signIn(data: AuthState): Promise<void>;
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

  const signIn = useCallback(async ({ token, user }) => {
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
