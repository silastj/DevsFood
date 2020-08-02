import React, { useState} from 'react';
import {useSelector} from 'react-redux';
import {
    CartArea,
    CartHeader,
    CartIcon,
    CartText,
    CartBody,
    ProductsArea,
    ProductItem,
    ProductPhoto,
    ProductInfoArea,
    ProductName,
    ProductPrice,
    ProductQuantArea,
    ProductIcon,
    ProductNumber
} from './styled';

export default () => {

    const products = useSelector(state=> state.cart.products);

    const [show, setShow] = useState(true) ;

    const handleCardClick =() =>{
        setShow(!show)
    }
    return (
        <CartArea>
            <CartHeader onClick={handleCardClick}>
                <CartIcon src="/assets/cart.png"/>             
                <CartText>Meu Carrinho({products.length})</CartText>
                { show &&
                    <CartIcon src="/assets/down.png" />
                }{!show &&
                    <CartIcon src="/assets/up.png"/>   
                }             
                </CartHeader>
                <CartBody show={show}>
                    <ProductsArea>

                        <ProductItem>
                            <ProductPhoto src="/assets/cart.png"/>
                            <ProductInfoArea>
                                <ProductName>Bolo</ProductName>
                                <ProductPrice>R$10,00</ProductPrice>
                            </ProductInfoArea>
                            <ProductQuantArea>
                                <ProductIcon src="/assets/menos.png"/>
                                    <ProductNumber>10</ProductNumber>
                                <ProductIcon src="/assets/mais.png"/>
                            </ProductQuantArea>

                        </ProductItem>
                    </ProductsArea>
                </CartBody>
        </CartArea>
    );
}