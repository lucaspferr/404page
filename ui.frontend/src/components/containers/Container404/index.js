import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { Container, Title, Paragraph, ButtonText, Button } from "./styles";

const Container404 = (props) => {

    const titleText = 'I have bad news for you';
    const paragraphText = 'The page you are looking for might be removed or is temporarily unavailable';
    const buttonText = 'BACK TO HOMEPAGE';
    const buttonTxtColor = 'white';
    const buttonBgColor = '#333333';

    return (
        <Container>
            <Title>{props.title ? props.title : titleText}</Title>
            <Paragraph>{props.paragraph ? props.paragraph : paragraphText}</Paragraph>
            <Button style={{backgroundColor:(props.buttoncolor ? props.buttoncolor : buttonBgColor)}}>
                <ButtonText style={{color:(props.buttontextcolor ? props.buttontextcolor : buttonTxtColor)}}>
                    {props.buttontext ? props.buttontext : buttonText}
                </ButtonText>
            </Button>
        </Container>
    );
}

export default MapTo('page404/components/container-404')(Container404);