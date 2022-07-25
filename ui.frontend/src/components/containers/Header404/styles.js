import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    font-family: 'Inconsolata', monospace;
    align-items: flex-start;
    margin-left: 5%;
    margin-bottom: 5%;
`;

export const HeaderText = styled.h1`
    font-size: 24px;
    font-weight: 700;
    @media (max-width: 768px) {
        font-size: 18px;
    }
`;