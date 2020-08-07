import styled from 'styled-components';

export const Container = styled.div`
    margin-left:20px;
    margin-top:35px;
    display:flex;
    align-items:center;
    width:350px;
    height:98px;
    background-color:#ffffff;
    border-radius:5px;
    box-shadow:0 3px 6px #000000;
    justify-content: flex-start;
    padding:13px;
    margin-right:5px;
    cursor:pointer;
    transition: all 0.7s cubic-bezier(0.25, 0.63, 0.09, 1.05); 
        &:hover{
            transform: scale(1.1);
            transition: all 0.7s cubic-bezier(0.25, 0.63, 0.09, 1.05);
        }
    @media screen and (max-width:600px){
        max-width:100%;
        height: auto;
        margin-left:5px;
    }
    @media screen and (max-width:375px){
        width:100%;
        flex-direction: column;
        align-items: flex-start;
    }

`;

export const ProductPhotoArea = styled.div`
    margin-right:20px;
    width:100px;
    height:89px;    
    @media screen and (max-width:600px){
        margin-right:5px;
    }
    @media screen and (max-width:375px){
        width:100%;
        margin-bottom:5px;
    }
`;

export const ProductInfoArea = styled.div`
    margin-right:60px;
    display:flex;
    flex-direction:column;
    align-self:flex-start;
    flex:1;
`;

export const ProductPhoto = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    border-radius:10px;

    @media screen and (max-width:375px){
        border-radius:5px;
    }
`;

export const ProductButtonArea = styled.div`
    display:flex;
    justify-content:flex-end;

    @media screen and (max-width:375px){
        align-self:flex-end
    }
`;

export const ProductName = styled.div`
    font-weight:bold;
    font-size:20px;
    color:#136713;
`;

export const ProductPrice = styled.div`    
    font-size:14px;
    color:#136713;
    margin-bottom:5px;
`;

export const ProductIngredientes = styled.div`
    font-size:11px;
    color:#136713;
`;

export const ProductButton = styled.img`
    width:15px;
 
`;

