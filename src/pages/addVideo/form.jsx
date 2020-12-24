import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { AppContext } from 'contexts/app';
import { localS } from 'utils';

export default function AddVideo() {
  const { auth, setVideos } = useContext(AppContext);
  const [url, setUrl] = useState('');

  const history = useHistory();

  const handleShare = () => {
    const videoList = localS.get('videos');
    localS.set(
      'videos',
      videoList
        ? [...videoList, {
          sharedBy: auth.username, url, like: [], dislike: [],
        }]
        : [{
          sharedBy: auth.username, url, like: [], dislike: [],
        }],
    );
    setVideos((prevState) => [...prevState, { sharedBy: auth.username, url }]);
    history.push('/');
  };

  const handleUrlChange = (e) => {
    const { value } = e.target;
    setUrl(value);
  };

  return (
    <div>
      <h4>Share a youtube movie</h4>
      <input placeholder="Youtube URL" onChange={handleUrlChange} value={url} />
      <button type="button" onClick={handleShare}>
        Share
      </button>
    </div>
  );
}
