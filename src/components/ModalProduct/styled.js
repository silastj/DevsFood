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

    @media screen and (max-width:768px){
        flex-direction:column;
        margin:0%;    
        height:100%;    
    }
`;
export const ProductPhoto = styled.img`
    width:308px;
    height:221px;
    border-radius:10px;    
    transition: all 0.7s cubic-bezier(0.25, 0.63, 0.09, 1.05); 
    cursor:pointer;
        &:hover{
            transform: scale(1.1);
            transition: all 0.7s cubic-bezier(0.25, 0.63, 0.09, 1.05);
            border:none;
        }
        &:focus{
            border:none;
        }
        &:active{
            border:none;
        }
        &:visited{
            border:none;
        }
        @media screen and (max-width:768px){
            width:100%;
            border-radius:10px 10px 0 0;
        }
   
`;
export const ProductInfoArea = styled.div`
    width:326px;
    height:221px;
    margin:0px 0px 0 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width:768px){
        margin:0px;
        max-width:100%;
    }
`;

export const ProductDetails = styled.div`
 @media screen and (max-width:768px){
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        padding-bottom:10px;
        border-bottom:1px solid #0b4d0b57;
        padding:5px;
        max-width:100%;
    }
`;


export const ProductName = styled.h1`
    margin:0;
    font-size:30px;
    font-weight:bold;
    color:#136713;
    margin-bottom:15px;
    @media screen and (max-width:375px){
        font-size:24px;
    }
    
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
    @media screen and (max-width:768px){
        padding-top:10px;
        
    }
`;

export const ProductPriceQ = styled.div`
 @media screen and (max-width:768px){

 }   

`;
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

    @media screen and (max-width:768px){
        justify-content:space-around;
    }
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
    cursor:pointer;
`;

export const ProductButtons = styled.div`
    margin:0 24px 0 28px;
    display:flex;
    justify-content:flex-end; 
    align-items: flex-end;
    @media screen and (max-width:768px){
        position:absolute;
        bottom:10px;
        left: 50%;
        transform: translateX(-50%);
        display:flex;
        justify-content:space-between; 
        margin:0px;
    }
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

    @media screen and (max-width:768px){
        width:${props=>props.small ? '65px' : '195px'};
        height:${props=>props.small ? '30px' : '40px'};
        font-size:${props=>props.small ? '10px' : '14px'};
        box-shadow:none;
    }
`;




