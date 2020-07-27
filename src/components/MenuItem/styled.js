import styled from 'styled-components';


export const LinkArea = styled.a`
    width:60px;
    height:60px;
    border-radius:10px;
    background-color:${props=>props.active ? '#0B4D0B' : ''};
    display:flex;
    align-items: center;
    justify-content: center;
    margin:25px 0;
`;

export const LinkIcon = styled.img`
    width:34px;
    height:34px;
    
`;