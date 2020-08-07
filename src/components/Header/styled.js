import styled from 'styled-components';

export const Container = styled.div`
    background-color:#136713;
    border-radius:10px;
    margin:17px 25px 20px 22px;
    padding:20px;
    display:flex;
    justify-content:space-between;
    align-items:center;

    @media(max-width: 600px) {
        flex-wrap: wrap;
        margin: 0;
        border-radius:0 0 10px 0;
        flex-direction:column;
        align-items:flex-start;
    }
`;

export const Logo = styled.img`
    width:220px;
    height:66px;

`;

export const SearchInput = styled.input`
    border:0;
    border-radius:25px;
    max-width:${props=>props.active ? 300 : 0}px;
    height:50px;
    outline:0;
    background-color:#ffffff;
    background-image:url('./assets/search.png');
    background-size:30px;
    background-repeat: no-repeat;
    background-position:10px center;
    padding-left:50px;
    transition: all ease .3s;
    cursor:pointer;
    font-size:16px;

    &:focus{
        cursor:text;
    }
    @media(max-width: 600px) {
        margin-top:10px;
    }
`;
