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
   @media(max-width: 600px) {
        margin-bottom:10px;
        width:50px;
        border-radius:4px;
        margin-right:5px;
    }
`;

export const CategoryImage = styled.img`
    width:60px;
    height:auto;
    padding:12px;

    @media(max-width: 600px) {
        width:25px;
    }
 
`;
