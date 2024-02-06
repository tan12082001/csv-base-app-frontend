import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AppRouter from './AppRouter';

function App() {
  const clientId = '660840585906-ekd0h81e3vaglto3urrf8v387d4sn06k.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="App">
        <AppRouter />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
