import React, { useState } from 'react';

import { localS } from 'utils';

export const AppContext = React.createContext();

export function AppProvider({ children }) {
  if (!children) {
    return null;
  }
  const currentUser = localS.get('currentUser');
  const videoList = localS.get('videos');
  const [auth, setAuth] = useState(
    currentUser ? { username: currentUser.username } : null,
  );
  const [videos, setVideos] = useState(videoList || []);

  const contextValue = {
    auth,
    setAuth,
    videos,
    setVideos,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
