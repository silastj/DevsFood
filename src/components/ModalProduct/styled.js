import styled from 'styled-components';

export const Container = styled.div`
    max-width:740px;
    height:370px;
    border-radius:20px;
`;
export const ProductArea = styled.div`
    height:246px;
    margin:28px 24px 0 28px;
    display:flex;
`;
export const ProductPhoto = styled.img`
    width:308px;
    background-color:red;
    height:221px;
    border-radius:10px;    
    transition: all 0.7s cubic-bezier(0.25, 0.63, 0.09, 1.05); 
    cursor:pointer;
        &:hover{
            transform: scale(1.1);
            transition: all 0.7s cubic-bezier(0.25, 0.63, 0.09, 1.05);
        }
   
`;
export const ProductInfoArea = styled.div`
    width:326px;
    height:221px;
    margin:0px 0px 0 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ProductDetails = styled.div`
`;


export const ProductName = styled.h1`
    margin:0;
    font-size:30px;
    font-weight:bold;
    color:#136713;
    margin-bottom:15px;
    
`;

export const ProductPrice = styled.h3`
     margin:0;
     font-size:14px;
     font-weight:bold;
     color:#136713;
     margin-bottom:20px;
`;
export const ProductQuant = styled.div`
    display: flex;
    align-items: center;
`;

export const ProductPriceQ = styled.div``;

 



export const ProductIngredientes = styled.p`
     margin:0;
     font-size:14px;
     font-weight:bold;
     color:#136713;
`;
export const ProductQuantityArea = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
`;
export const ProductNumber = styled.h3`
    color:#136713;
    font-size:25px;
    font-weight:bold;
    margin:0 10px;
`;

export const ProductPriceQuant = styled.h3`
     margin:0;
     font-size:30px;
     font-weight:bold;
     color:#136713;
`;
export const ProductQtImage = styled.img`
    width:100%;
    height:auto;
`;

export const ProductButtons = styled.div`
    margin:0 24px 0 28px;
    display:flex;
    justify-content:flex-end; 
    align-items: flex-end;
`;

export const ProductButton = styled.button`
    width:${props=>props.small ? '96px' : '300px'};
    height:${props=>props.small ? '46px' : '70px'};
    border-radius:5px;
    color:#ffffff;
    background-color:#0B490B;
    border:none;
    font-weight:bold;
    font-size:${props=>props.small ? '13px' : '22px'};
    cursor:pointer;
    margin-left:${props=>props.small ? '0px' : '22px'};
    box-shadow:2px 2px 0px #0b490b3b;
`;




