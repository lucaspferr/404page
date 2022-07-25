import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import { Title } from './styles';


const Title404 = (props) => {

    return (
        <div>
        <Title>{props.title ? props.title : 'I have bad news for you'}</Title>
        </div>
    );
}
 export default MapTo('page404/components/title-404')(Title404);