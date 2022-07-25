import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { HeaderContainer, HeaderText } from "./styles";

const Header404 = (props) => {
    const headerText = '404 NOT FOUND';

    return(
        <HeaderContainer>
            <HeaderText>
                {props.headertext ? props.headertext : headerText}
            </HeaderText>
        </HeaderContainer>
    );
}

export default MapTo('page404/components/header-404')(Header404);