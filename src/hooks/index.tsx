import React, { ReactNode } from 'react';

import { AuthProvider } from './AuthContext';
import { ToastProvider } from './ToastContext';

type AuthProps = {
  children: ReactNode;
};

function AppProvider({ children }: AuthProps): JSX.Element {
  return (
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  );
}

export default AppProvider;
