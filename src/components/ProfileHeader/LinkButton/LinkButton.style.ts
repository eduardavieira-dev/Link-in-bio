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
    #490cb0   60%,
    #490cb0 80%,
    transparent 100%
  );
    color: var(--white-color);
    outline: 2px solid transparent;
    text-align: center;
    text-decoration: none;
    transition: ease all .3s;
    
    &:link,
    &:visited {
        /* color: var(--bg-color); */
        color: var(--white-color);
    }

    &:hover {
        background-color: var(--primary-color);
        outline: 2px solid var(--outline);
        color: var(--white-color);
    }
    `;