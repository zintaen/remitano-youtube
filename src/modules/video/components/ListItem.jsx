import React, { useEffect, useState } from 'react';

import { getListVideoInfo } from 'apis/youtube';

import Item from './Item';

export default function ListItem({ auth, videos }) {
  const [listData, setListData] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(async () => {
    const listVideoId = videos.map(({ url }) => {
      let videoId = url.split('v=')[1];

      const ampersandPosition = videoId.indexOf('&');
      if (ampersandPosition !== -1) {
        videoId = videoId.substring(0, ampersandPosition);
      }

      return videoId;
    });

    try {
      const response = await getListVideoInfo({ listVideoId });
      setListData(response.data?.items || []);
    } catch (e) {
      setIsError(true);
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }, []);

  if (isError) {
    return <div>Fail to load videos</div>;
  }

  if (!listData.length) {
    return <div>No video yet, please add one!</div>;
  }
  return listData.map((data, idx) => (
    <Item key={data.id} auth={auth} data={data} video={videos[idx]} />
  ));
}
