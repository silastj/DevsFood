import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    padding:15px;
`;

export const Titulo = styled.h1``;

export const CategoryArea = styled.div`
    font-size:14px;
    color:#ffffff;
    padding:10px 20px 10px 20px;
`;

export const CategoryList = styled.div`
    display:flex;
    justify-content:flex-start;
    margin-top:20px;
`;

export const CategoryItem = styled.div`
   width:82px;  
`;
export const ProductArea = styled.div``;

export const ProductList = styled.div`
    display:flex;
    flex-wrap:wrap;
`;
export const ProductPaginationArea = styled.div`

    display:flex;
    flex-wrap:wrap;
    padding:20px;
`;
export const ProductPaginationItem = styled.div`
    background-color:${props=>props.active === props.current ? '#707070' : '#fff' };
    color:${props=>props.active === props.current ? '#fff' : '#000'};
    padding:10px;
    border-radius:5px;
    box-shadow: 0px 3px 6px #000;
    cursor:pointer;
    margin-right:5px;
`;

