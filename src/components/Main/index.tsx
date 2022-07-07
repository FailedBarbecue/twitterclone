import React from 'react';

import ProfilePage from '../ProfilePage';

import { Container, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon, BellIcon, SearchIcon, EmailIcon } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Eduardo Schiavo</strong>
          <span>517 tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      <BottomMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  )
};

export default Main;