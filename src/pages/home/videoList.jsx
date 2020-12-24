import React, { useContext } from 'react';

import { AppContext } from 'contexts/app';
import { VideoList } from 'modules/video';

export default function videoList() {
  const { auth, videos } = useContext(AppContext);

  return <VideoList auth={auth} videos={videos} />;
}
