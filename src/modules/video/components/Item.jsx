/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import Player from 'react-youtube';

import { localS } from 'utils';
import styles from './Item.module.scss';

const like = 'https://img.flaticon.com/icons/png/512/126/126473.png';
const likeChose = 'https://png.pngtree.com/png-vector/20190223/ourlarge/pngtree-vector-like-icon-png-image_695769.jpg';
const dislike = 'https://i.pinimg.com/originals/70/14/00/701400d4bdb6ffa091ab5d8e12aad621.png';
const dislikeChose = 'https://cdn.onlinewebfonts.com/svg/img_529935.png';

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return () => setValue((val) => ++val);
}

export default function MovieItem({ auth, data, video }) {
  const {
    snippet: { title, description },
    statistics,
  } = data || {};

  const forceUpdate = useForceUpdate();

  const handleLike = () => {
    const videoList = localS.get('videos');
    localS.set(
      'videos',
      videoList.map((vid) => {
        if (vid.url === video.url) {
          if (!vid.like.find((name) => name === auth.username)) {
            vid.like = [...vid.like, auth.username];
          }
        }
        return vid;
      }),
    );
    forceUpdate();
  };

  const handleDislike = () => {
    const videoList = localS.get('videos');
    localS.set(
      'videos',
      videoList.map((vid) => {
        if (vid.url === video.url) {
          if (!vid.dislike.find((name) => name === auth.username)) {
            vid.dislike = [...vid.dislike, auth.username];
          }
        }
        return vid;
      }),
    );
    forceUpdate();
  };

  const renderLikeDislike = () => {
    if (auth) {
      const currentVideo = localS.get('videos').find((vid) => vid.url === video.url);

      if (currentVideo.like.find((user) => user === auth.username)) {
        return (
          <img
            className={styles.likebig}
            src={likeChose}
            alt="like"
          />
        );
      }

      if (currentVideo.dislike.find((user) => user === auth.username)) {
        return (
          <img
            className={styles.dislikebig}
            src={dislikeChose}
            alt="dislike"
          />
        );
      }

      return (
        <>
          <img
            className={styles.likebig}
            src={like}
            alt="like"
            onClick={handleLike}
          />
          <img
            className={styles.dislikebig}
            src={dislike}
            alt="dislike"
            onClick={handleDislike}
          />
        </>
      );
    }
    return null;
  };

  return (
    <div className={styles.container}>
      <Player videoId={data.id} opts={{ width: '400', height: '250' }} />
      <div className={styles.body}>
        <h4 className={styles.title}>{title}</h4>
        <h4 className={styles.sharedby}>
          Shared by:
          {video.sharedBy}
          {renderLikeDislike()}
        </h4>
        {statistics.likeCount}
        {' '}
        <img className={styles.like} src={like} alt="like" />
        {' '}
        {statistics.dislikeCount}
        {' '}
        <img className={styles.dislike} src={dislike} alt="dislike" />
        <h4>Description:</h4>
        <pre className={styles.description}>{description}</pre>
      </div>
    </div>
  );
}
