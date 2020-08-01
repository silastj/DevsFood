import React from 'react';
import {Container, ProductArea,ProductButtons, ProductPhoto, ProductInfoArea, ProductDetails, ProductQuantityArea, ProductName, ProductPrice, ProductIngredientes, ProductNumber,ProductPriceQuant, ProductQtImage,ProductButton, ProductQuant, ProductPriceQ} from './styled';


export default ({data}) => {
    return(
        <Container>

            <ProductArea>
                <ProductPhoto src={data.image}/>

                <ProductInfoArea>
                    <ProductDetails>
                    <ProductName>{data.name}</ProductName>
                    <ProductPrice>$ {data.price}</ProductPrice>
                    <ProductIngredientes>{data.ingredients}</ProductIngredientes>

                    </ProductDetails>
                    <ProductQuantityArea>

                        <ProductQuant>
                            <ProductQtImage src="/assets/menos.png"/>
                                <ProductNumber>4</ProductNumber>
                            <ProductQtImage src="/assets/mais.png"/>
                        </ProductQuant>
                        <ProductPriceQ>
                            <ProductPriceQuant>$ {data.price}</ProductPriceQuant>
                        </ProductPriceQ>

                    </ProductQuantityArea>
                </ProductInfoArea>

            </ProductArea>
            <ProductButtons>
                <ProductButton small={true}>Cancelar</ProductButton>
                <ProductButton>Adicionar o Carrinho</ProductButton>
            </ProductButtons>
        </Container>
    );
}