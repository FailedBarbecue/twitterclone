import React from 'react';

import FollowSuggestion from '../FollowSuggestion'
import News from '../News'
import List from '../List'

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

const SideBar: React.FC = () => {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Buscar no Twitter" />
                <SearchIcon />
            </SearchWrapper>

            <Body>
                <List title="O que está acontecendo"
                    elements={[
                        <News />, <News />, <News />, <News />, <News />
                    ]}
                />
                <List title="Quem seguir"
                    elements={[
                        <FollowSuggestion
                            name="NOir desires"
                            nickname="@vitorsempai"
                        />,
                        <FollowSuggestion
                            name="joão lennon"
                            nickname="@jjavy_"
                        />,
                        <FollowSuggestion
                            name="diogo"
                            nickname="@hitthawid"
                        />,
                        <FollowSuggestion
                            name="gabriel"
                            nickname="@levioty"
                        />,
                    ]}
                />
            </Body>
        </Container>
    );
}

export default SideBar;