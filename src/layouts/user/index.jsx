import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthBar } from 'modules/auth';

import { localS } from 'utils';
import { AppContext } from 'contexts/app';
import styles from './index.module.scss';

function MainLayout({ children }) {
  const context = useContext(AppContext);
  const { auth, setAuth } = context;
  const history = useHistory();

  const handleAuth = (username, password, errorCallback = () => {}) => {
    if (!username || !password) {
      errorCallback();
    } else {
      const accounts = localS.get('accounts');

      // register
      if (!accounts) {
        localS.set('accounts', [{ username, password }]);
        localS.set('currentUser', { username, password });
        setAuth({ username });
      } else {
        const isUserExist = accounts.find((user) => user.username === username);
        // register
        if (!isUserExist) {
          localS.set('accounts', [...accounts, { username, password }]);
          localS.set('currentUser', { username, password });
          setAuth({ username });
        } else {
          const foundUser = accounts.find(
            (user) => user.username === username && user.password === password,
          );
          // login
          if (foundUser) {
            localS.set('currentUser', { username, password });
            setAuth({ username });
          } else {
            errorCallback();
          }
        }
      }
    }
  };

  const handleLogout = () => {
    localS.remove('currentUser');
    setAuth(null);
  };

  const handleShare = () => {
    history.push('/add-video');
  };

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <h3>Funny Movie</h3>
        <AuthBar
          onSubmit={handleAuth}
          onLogout={handleLogout}
          onShare={handleShare}
          username={auth?.username}
        />
      </nav>
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default MainLayout;
