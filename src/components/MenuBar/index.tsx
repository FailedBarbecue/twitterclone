import React from 'react';

import Button from '../Button'

import { Container, Topside, Logo, MenuButton, Explore, HomeIcon, BellIcon, EmailIcon, Favorite, ProfileIcon, Dots, Botside, Avatar, ProfileData, ExitIcon, Feather } from './styles';

const MenuBar: React.FC = () => {
    return (
        <Container>
            <Topside>
                <Logo />

                <MenuButton>
                    <HomeIcon />
                    <span>Página Inicial</span>
                </MenuButton>

                <MenuButton>
                    <Explore />
                    <span>Explorar</span>
                </MenuButton>

                <MenuButton>
                    <BellIcon />
                    <span>Notificações</span>
                </MenuButton>

                <MenuButton>
                    <EmailIcon />
                    <span>Mensagens</span>
                </MenuButton>

                <MenuButton>
                    <Favorite />
                    <span>Itens salvos</span>
                </MenuButton>

                <MenuButton className="active">
                    <ProfileIcon />
                    <span>Perfil</span>
                </MenuButton>

                <MenuButton>
                    <Dots />
                    <span>Mais</span>
                </MenuButton>

                <Button>
                    <Feather />
                    <span>Tweetar</span>
                </Button>

            </Topside>
            <Botside>
                <Avatar />

                <ProfileData>
                    <strong>Eduardo Schiavo</strong>
                    <span>@eduschiavo</span>
                </ProfileData>

                <ExitIcon />
            </Botside>
        </Container>
    )
}

export default MenuBar;