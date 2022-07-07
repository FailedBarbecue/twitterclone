import React from 'react';

import styled, { css } from 'styled-components';

import { Chat, Favorite } from '../../styles/icons'



export const Container = styled.div`
  display:flex;
  flex-direction: column;

  padding: 14px 16px;

  border-bottom: 1px solid var(--outline);
  
  max-width: 100%;
`;
export const Retweeted = styled.div`
    display:flex;
    align-items: center;
    
    font-size: 13px;
    color: var(--gray);
`;
export const RetweetIcon = () => (<svg style={{ width: '18px', height: '18px', margin: '0 9px 0px 35px', fill: 'var(--gray)', }} viewBox="0 0 24 24" >
    <path fill="fill: currentColor;" d="M6,5.75L10.25,10H7V16H13.5L15.5,18H7A2,2 0 0,1 5,16V10H1.75L6,5.75M18,18.25L13.75,14H17V8H10.5L8.5,6H17A2,2 0 0,1 19,8V14H22.25L18,18.25Z" />
</svg >);
export const IconRetweet = () => (<svg style={{ width: '20px', height: '20px' }} viewBox="0 0 24 24" >
    <path fill="fill: currentColor;" d="M6,5.75L10.25,10H7V16H13.5L15.5,18H7A2,2 0 0,1 5,16V10H1.75L6,5.75M18,18.25L13.75,14H17V8H10.5L8.5,6H17A2,2 0 0,1 19,8V14H22.25L18,18.25Z" />
</svg >);
export const Body = styled.div`
    display:flex;
    margin-top: 3px;

    position: relative;
`;
export const Avatar = styled.div`
    width: 49px;
    height: 49px;
    border-radius: 50%;
    flex-shrink: 0;
    background: var(--gray);

    position: absolute;
    top: 0;
    left: 0;
`;
export const Content = styled.div`
    display:flex;  
    flex-direction: column;
    
    width: 100%;
    margin-top: 2px;
    padding-left: 59px;
`;
export const Header = styled.div`
    display: flex;
    align-items: center;
    
    font-size: 15px;
    white-space: nowrap;

    > strong {
        margin-right: 5px;
    }
    > span, time {
        color: var(--gray);
    }
    > strong, span {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`;

export const Dot = styled.div`
    background: var(--gray);
    width: 2px;
    height: 2px;
    margin: 0 10px;
`;

export const Description = styled.p`
    font-size: 14px;
    margin-top: 4px;
`;
export const ImageContent = styled.div`
    margin-top: 12px;
    width: 100%;
    height: min(285px, max(175px, 41vw));
    
    background: var(--outline);
    border-radius: 14px;

    cursor: pointer;
    &:hover {
        opacity: .7;
    }
`;
export const Icons = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 11px auto 0;
    width: 100%;

    @media (min-width: 330px) {
        width:63%;
    }

        >div {
            cursor: pointer;

            &:hover {
                opacity: 0.7;
            }
        }
`;
export const Status = styled.div`
    display: flex;
    align-items: center;

    font-size: 14px;
    
    > svg {
        margin-right: 5px;
    }
    &:nth-child(2) {
        color: var(--retweet);
        > svg path {
            fill: var(--retweet)
        }
    }

    &:nth-child(3) {
        color: var(--like);
        > svg {
            fill: var(--like)
        }
    }
`;
const iconCSS = css`
        width: 19px;
        height: 19px;
`;

export const CommentIcon = styled(Chat)`
    ${iconCSS}
`;
export const LikeIcon = styled(Favorite)`
    ${iconCSS}
`; 