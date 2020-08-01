import React, {useState, useEffect }from 'react';
import {Container, ProductArea,ProductButtons, ProductPhoto, ProductInfoArea, ProductDetails, ProductQuantityArea, ProductName, ProductPrice, ProductIngredientes, ProductNumber,ProductPriceQuant, ProductQtImage,ProductButton, ProductQuant, ProductPriceQ} from './styled';


export default ({data, setStatus}) => {

    const [qt, setQt] = useState(1);

    // Ele monitora o modal do set quando for fechado ele zera para 1 quantidade
    useEffect(()=> {
        setQt(1);
    }, [data]);
    // Ele monitora o modal do set quando for fechado ele zera para 1 quantidade

    const handleClickFechar = () => {
        setStatus(false);
    }

    const handleClickMenos = () =>{
        if(qt > 1){
            setQt(qt - 1);
        }
    }

    const handleClickMais = () => {
        setQt(qt + 1)
    }


    return(
        <Container>

            <ProductArea>
                <ProductPhoto src={data.image}/>

                <ProductInfoArea>
                    <ProductDetails>
                    <ProductName>{data.name}</ProductName>
                    <ProductPrice>Unid:${data.price}</ProductPrice>
                    <ProductIngredientes>{data.ingredients}</ProductIngredientes>

                    </ProductDetails>
                    <ProductQuantityArea>

                        <ProductQuant>
                            <ProductQtImage src="/assets/menos.png" onClick={handleClickMenos}/>
                                <ProductNumber>{qt}</ProductNumber>
                            <ProductQtImage src="/assets/mais.png" onClick={handleClickMais}/>
                        </ProductQuant>
                        <ProductPriceQ>
                            <ProductPriceQuant>$ {(data.price * qt).toFixed(2)}</ProductPriceQuant>
                        </ProductPriceQ>

                    </ProductQuantityArea>
                </ProductInfoArea>

            </ProductArea>
            <ProductButtons>
                <ProductButton small={true} onClick={handleClickFechar}>Cancelar</ProductButton>
                <ProductButton>Adicionar o Carrinho</ProductButton>
            </ProductButtons>
        </Container>
    );
}