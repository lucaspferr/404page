import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { FooterContainer, FooterText } from "./styles";

const Footer404 = (props) => {
    const footerText = 'create by lucas - compass';

    return(
        <FooterContainer>
            <FooterText>
                {props.footertext ? props.footertext : footerText}
            </FooterText>
        </FooterContainer>
    );
}

export default MapTo('page404/components/footer-404')(Footer404);