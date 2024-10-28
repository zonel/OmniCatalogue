import React from 'react';
import MyImages from '../components/MyImages';
import UserInfo from '../components/UserInfo';

const MyImagesPage = () => {
  return (
    <div style={{ display: 'flex', padding: '2rem', gap: '2rem' }}>
      <UserInfo />
      
      <div style={{ flex: 3 }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>My Generated Images</h2>
        <MyImages />
      </div>
    </div>
  );
};

export default MyImagesPage;
