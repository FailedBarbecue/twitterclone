import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton  } from './styles';
import Feed from '../Feed'

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar />
        </Banner>

        <ProfileData>
            <EditButton outlined>Editar perfil</EditButton>
            <h1>Eduardo Schiavo</h1>
            <h2>@eduschiavo</h2>

            <p>Developer at <a href="https://tiflux.com/">Tiflux</a>
            </p>

            <ul>
                <li>
                    <LocationIcon />
                    Joinville, Brasil
                </li>
                <li>
                    <CakeIcon />
                    Nascido(a) em 23 de maio de 2003
                </li>
            </ul>
            <Followage>
                <span>
                    seguindo <strong>104</strong>
                </span>
                <span>
                    <strong>947</strong> seguidores
                </span>
            </Followage>
        </ProfileData>

        <Feed />
    </Container>
  );
}

export default ProfilePage;