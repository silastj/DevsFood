import styled from 'styled-components';

export const Container = styled.div`
    display:${props=>props.status ? 'flex' : 'none'};
    justify-content:center;
    align-items:center;
    position:fixed;
    left:0;
    right:0;
    top:0;
    bottom:0;
    background-color: rgba(0,0,0, 0.7);
    z-index:999;    
`;

export const ModalBody = styled.div`
    max-width:100vw;
    background-color:#ffffff;
    max-height:70vh;
    overflow:auto;
    border-radius:20px;
    @media screen and (max-width:768px){
        height:55vh;
        position:relative;        
    }
    @media screen and (max-width:375px){
        max-width:90vw;
    }
`;


