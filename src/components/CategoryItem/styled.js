import styled from 'styled-components';


export const Container = styled.div`
   width:80px;
   height:auto;
   margin-right:20px;
   background-color:${props=>props.active == props.id ? '#ffffff' : '#AAE09A'};
   border-radius:20px;
   cursor:pointer;
   transition: all ease .2s;
   &:hover{
       transition: all ease .3s;
       filter: brightness(0.5);
   }
`;

export const CategoryImage = styled.img`
    width:58px;
    height:auto;
    padding:12px;
 
`;
