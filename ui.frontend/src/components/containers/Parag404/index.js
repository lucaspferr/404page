import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { Text, Container } from "./styles";

const Parag404 = (props) => {
    return (
        <Container>
            <Text>{props.text ? props.text : "The page you are looking for might be removed or is temporarily unavailable"}</Text>
        </Container>
    );
}

export default MapTo("page404/components/parag-404")(Parag404);