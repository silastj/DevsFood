import React,{ useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Container, CategoryArea , CategoryList, ProductArea, ProductList} from './styled';
import ReactTooltip from 'react-tooltip';

import Header from '../../components/Header';
import api from '../../api';
import CategoryItem from '../../components/CategoryItem';
import ProductItem from '../../components/ProductItem';

export default () => {
    const history = useHistory();
    const [ headerSearch, setHeaderSearch ] = useState('');
    const [ categories, setCategories ] = useState([]);
    const [ products, setProducts ] = useState([]);

    const [activeCategory, setActiveCategory ] = useState(0);

    //Criaremos essa função do lado de fora, 
    //pra facilitar quando eu precisar usar na paginação ou busca eu apenas chamar a função criada
    //Mesmo procedimento cque fiz abaixono getCategories
    const getProducts = async () => {
        const prods = await api.getProducts();
        if(prods.error === ''){
            //SETANDO O CAMINHO PARA SER EXIBIDO SE NAO TIVER ERRO ACIMA
            setProducts(prods.result.data);
        }

    }

    useEffect(() => {
        //Ele precisar ser asycroni para receber a api
        // iremos criar a função abaixo
        const getCategories = async () => {
            //Conteudo da api abaixo
            const cat = await api.getCategories();
            // console.log(cat);
            if(cat.error === ''){
                setCategories(cat.result);
            }

            // Ele dá um rebuild, pq a página já foi caregada e a API não, por isso dá um Rebuild
            ReactTooltip.rebuild();
            
        }
      
        getCategories();
    }, []);


    useEffect(()=> {
        getProducts();
    }, [activeCategory]);
   

    return (
        <Container>
           <Header search={headerSearch} onSearch={setHeaderSearch}/>
          
            {categories.length > 0 &&
                <CategoryArea>
                    Selecione uma categoria({activeCategory} )
                    <CategoryList>
                        <CategoryItem
                        data={{
                            id:0,
                            name:"Todas as Categorias",
                            image:"/assets/food-and-restaurant.png"
                        }} 
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                        />
                        {categories.map((item, index)=>(
                            <CategoryItem
                                key={index}
                                data={item}
                                activeCategory={activeCategory}
                                setActiveCategory={setActiveCategory}
                            />
                        ))}
                    </CategoryList>
                </CategoryArea>           
            }    

            {/* AREA DOS PRODUTOS*/}
            {/* SE TIVER PRODUTOS PARA SER EXIBIDO MOSTRAREMOS ESSA AREA ABAIXO */}
            {products.length > 0 &&
                <ProductArea>
                    <ProductList>
                        {products.map((item, index)=> (
                            <ProductItem 
                                key={index}
                                data={item}                            
                    />
                        ))}
                    </ProductList>
                </ProductArea>
            }
        </Container>
    );
}