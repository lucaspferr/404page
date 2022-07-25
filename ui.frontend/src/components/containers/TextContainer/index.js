import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { Container, Title, Paragraph, ButtonText, Button } from "./styles";


const TextContainer = (props) => {

    const titleText = 'I have bad news for you';
    const paragraphText = 'The page you are looking for might be removed or is temporarily unavailable';
    const buttonText = 'BACK TO HOMEPAGE';

    return (
        <Container>
            <Title>{props.title ? props.title : titleText}</Title>
            <Paragraph>{props.paragraph ? props.paragraph : paragraphText}</Paragraph>
            <Button>
                <ButtonText className="btntxt">
                    {props.buttontext ? props.buttontext : buttonText}
                </ButtonText>
            </Button>
        </Container>
    );
}

export default MapTo('page404/components/text-container')(TextContainer);