import styled from "styled-components";

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
    display: flex;
    font-family: 'Space Mono', monospace;
    font-weight: normal;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-left: 50px;
    span{
        color: #333333;
        line-height: normal;
        letter-spacing: normal;
        text-transform: none;
        margin: 0;
    }
    .btntxt{
        font-family: 'Space Mono', monospace;
        color: white;
        text-align: center;
    }

    @media (max-width: 768px) {
        margin: 0;
    }
`;

export const Title = styled.span`
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

export const Paragraph = styled.span`
    font-size: 18px;
    width: 65%;
    font-weight: normal;
    text-align: start;
    color: #4F4F4F;
    padding-bottom: 10vh;
    @media (max-width: 768px) {
        font-size: 14px;
        padding-bottom: 10vh;
        width: 100%;
    }
`;

export const ButtonText = styled.span`
    font-size: 14px;
    font-weight: normal;
    text-align: center;
`;

export const Button = styled.button`
    background: #333333;
    border: none;
    height: 48px;
    width: 196px;
`;