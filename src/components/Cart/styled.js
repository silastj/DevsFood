import styled from 'styled-components';


export const CartArea = styled.div`
    background-color:#136713;
    position:fixed;
    bottom:0;
    right:40px;    
    max-height:80vh;
    border-radius:10px 10px 0 0;
`;


export const CartHeader = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    align-self:center;
    line-height:51px;
    width:288px;
    cursor:pointer;
`;
export const CartIcon = styled.img`
    width:23px;
    height:auto;
    margin:0 14px;
`;
export const CartText = styled.div`
    flex:1;
    font-size:17px;
    color:white;
`;
export const CartBody = styled.div`
   display:${props=> props.show ? 'flex': 'none'};
   transition: .4s ease;
   border:1px solid red;
   height:100px;

`;
export const ProductsArea = styled.div``;
export const ProductItem = styled.div`
    display:flex;
`;
export const ProductPhoto = styled.img`
    width:64px;
    margin:0 14px;
`;
export const ProductInfoArea = styled.div`
    flex:1;
`;
export const ProductName = styled.div``;
export const ProductPrice = styled.div``;
export const ProductQuantArea = styled.div`
    background-color:blue;
    display:flex;
    align-items:center;
    width:100%;
`;

export const ProductIcon = styled.img`
    width:100%;
    height:auto;
    cursor:pointer;
`;
export const ProductNumber = styled.div``;


