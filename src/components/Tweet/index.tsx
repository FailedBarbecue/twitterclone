import React from 'react';
import { Container, Retweeted, Body, Avatar, Content, Header, Dot, Description, ImageContent, Icons, Status, CommentIcon, LikeIcon, RetweetIcon, IconRetweet } from './styles';

const Tweet: React.FC = () => {
    return (
        <Container>
            <Retweeted>
                <RetweetIcon />
                Você retweetou
            </Retweeted>

            <Body>
                <Avatar />

                <Content>
                    <Header>
                        <strong>Eduardo Schiavo</strong>
                        <span>@eduschiavo</span>
                        <Dot />
                        <time>05 de julho</time>
                    </Header>
                    <Description>Maiores combos do planeta</Description>
                    <ImageContent />
                    <Icons>
                        <Status>
                            <CommentIcon />
                            37
                        </Status>
                        <Status>
                            <IconRetweet />
                            21
                        </Status>
                        <Status>
                            <LikeIcon />
                            529
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    )
}

export default Tweet;