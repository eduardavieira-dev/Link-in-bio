import styled from 'styled-components';

export const Button = styled.a`
    width: 100% ;
    margin-bottom: 2vh;
    border-radius: 5px;
    padding: 14px 44px;
    background-color: var(--white-color);
    background: linear-gradient(
    45deg,
    #9b34ef 0%,
    #490cb0 20%,
    #490cb0  60%,
    transparent 80%
    );
    background-size: 250%;
    color: var(--white-color);
    outline: 2px solid transparent;
    text-align: center;
    text-decoration: none;
    transition: background 1s, outline 1s, transform 1s;

    
    &:link,
    &:visited {
        /* color: var(--bg-color); */
        color: var(--white-color);
    }

    &:hover {
        background: transparent;
        outline: 2px solid var(--outline);
        color: var(--white-color);
        transform: scale(1.03);
    }
    `;