import styled from 'styled-components';

export const  SocialMediaLink = styled.a`
    font-size: 2em;
    margin: 0 .3em;
    color: var(--white-color);
    text-decoration: none;
    transition: ease all .3s;

    &:link &:visited{
    color: var(--white-color);
    }

    &:hover{
        color: var(--primary-color);
    }

`;