import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-left: 50px;
    @media (max-width: 768px) {
        margin: 0;
    }
`;

export const Title = styled.h2`
    font-size: 48px;
    font-weight: bold;
    text-align: start;
    padding-bottom: 10vh;
    @media (max-width: 768px) {
        font-size: 36px;
        padding-bottom: 3vh;
        padding-top: 4vh;
    }
`;

export const Paragraph = styled.p`
    font-size: 18px;
    width: 65%;
    text-align: start;
    color: #4F4F4F;
    padding-bottom: 10vh;
    @media (max-width: 768px) {
        font-size: 14px;
        padding-bottom: 10vh;
        width: 100%;
    }
`;

export const ButtonText = styled.p`
    font-size: 14px;
    text-align: center;
    text-align: center;
`;

export const Button = styled.button`
    border: none;
    height: 48px;
    width: 196px;
`;