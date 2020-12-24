import React from 'react';

import styles from './authInfo.module.scss';

export default function AuthInfo({
  username,
  onShare = () => {},
  onLogout = () => {},
}) {
  return (
    <div className={styles.container}>
      <div>
        Welcome!
        {' '}
        {username}
      </div>
      <button type="button" onClick={onShare}>
        Share a movie
      </button>
      <button type="button" onClick={onLogout}>
        Log out
      </button>
    </div>
  );
}
