import React from 'react';

import UserLayout from 'layouts/user';
import VideoList from './videoList';

function HomePage() {
  return (
    <UserLayout>
      <VideoList />
    </UserLayout>
  );
}

export default HomePage;
