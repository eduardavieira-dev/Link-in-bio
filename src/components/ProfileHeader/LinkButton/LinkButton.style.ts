import styled from 'styled-components';

export const Button = styled.a`
    width: 100%;
    margin-bottom: 2vh;
    border-radius: 5px;
    padding: 14px 44px;
    background-color: var(--white-color);
    background: linear-gradient(45deg, 
        #9b34ef 0%, 
        #6728d3 20%, 
        #5518bf 40%, 
        #490cb0 60%, 
        rgb(82, 4, 161) 80%, 
        rgb(82, 4, 161, 0) 100%);
    background-size: 250%;
    background-position: 0%; 
    color: var(--white-color);
    outline: 2px solid transparent;
    text-align: center;
    text-decoration: none;
    transition:
        background-position .8s ease,
        outline 0.3s ease,
        transform 0.3s ease;

    &:link,
    &:visited {
        color: var(--white-color);
    }

    &:hover {
        background-position: 100%;
        outline: 2px solid var(--outline);
        color: var(--white-color);
        transform: scale(1.03);
    }
`;
