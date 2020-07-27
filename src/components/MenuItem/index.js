import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {LinkArea, LinkIcon } from './styled';

export default ({icon, link}) => {

    // VEREFICAR SE A LOCATION ATUAL É O LINK PARA FAZER UMA AÇÃO
    const location = useLocation();
    let isActive = location.pathname == link;
    // VEREFICAR SE A LOCATION ATUAL É O LINK PARA FAZER UMA AÇÃO


    // IREMOS PREVER O CLICK E MANTER O ROUTER DOM
    const history = useHistory();

    const handleLinkClick = (e) => {
        e.preventDefault();
        history.push ( link );
    }
    // IREMOS PREVER O CLICK E MANTER O ROUTER DOM


    return (
        <LinkArea active={isActive} href={link} onClick={handleLinkClick}>
            <LinkIcon src={icon} />
        </LinkArea>

    );
}