import React from 'react';

import AuthForm from './authForm';
import AuthInfo from './authInfo';

function AuthBar({
  onSubmit, onShare, onLogout, username,
}) {
  return (
    <div>
      {username ? (
        <AuthInfo onShare={onShare} onLogout={onLogout} username={username} />
      ) : (
        <AuthForm onSubmit={onSubmit} />
      )}
    </div>
  );
}

export default AuthBar;
