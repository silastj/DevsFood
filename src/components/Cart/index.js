import React, { useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
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
    ProductNumber,
    ProductAreaEndereco,
    ProductTitleEnd,
    ProductEnderecoDice,
    ProductAreaEndIcon,
    ProductEndArea,
    ProductDescriEnd
} from './styled';

export default () => {

    const dispatch = useDispatch();

    const products = useSelector(state=> state.cart.products);

    const [show, setShow] = useState(true) ;

    const handleCardClick =() =>{
        setShow(!show)
    }

    const handleProductChange = (key, type) => {
        // alert(key+' = '+type);
        dispatch({
            type:'CHANGE_PRODUCT',
            payload:{key,type}
        });
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
                        {products.map((item, index) => (
                             <ProductItem key={index}>
                             <ProductPhoto src={item.image}/>
                             <ProductInfoArea>
                                 <ProductName>{item.name}</ProductName>
                                 <ProductPrice>$ {item.price.toFixed(2)}</ProductPrice>
                             </ProductInfoArea>
                             <ProductQuantArea>
                                 <ProductIcon 
                                 
                                 src="/assets/minus.png"
                                 onClick={()=> handleProductChange(index, '-')}/>
                        <ProductNumber>{item.qt}</ProductNumber>
                                 <ProductIcon                                  
                                 src="/assets/plus.png"
                                 onClick={()=> handleProductChange(index, '+')}/>
                             </ProductQuantArea>
 
                         </ProductItem>
                        ))}
                       
                    </ProductsArea>
                </CartBody>     
                   {/* <ProductAreaEndereco show={show}>
                       <ProductTitleEnd>Entrega</ProductTitleEnd>

                       <ProductEnderecoDice>
                           <ProductEndArea>
                                <ProductDescriEnd>Minha Casa</ProductDescriEnd>
                                <ProductDescriEnd>Rua Florianopolis 27</ProductDescriEnd>
                                <ProductDescriEnd>Cidade Poá</ProductDescriEnd>
                            </ProductEndArea>
                            <ProductAreaEndIcon>
                                <ProductIcon src="/assets/edit.png"/>
                            </ProductAreaEndIcon>
                       </ProductEnderecoDice>

                   </ProductAreaEndereco> */}

                
        </CartArea>
    );
}