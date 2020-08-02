import React,{ useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Container, CategoryArea , CategoryList, ProductArea, ProductList, ProductPaginationArea, ProductPaginationItem} from './styled';
import ReactTooltip from 'react-tooltip';

import Header from '../../components/Header';
import api from '../../api';
import CategoryItem from '../../components/CategoryItem';
import ProductItem from '../../components/ProductItem';
import Modal from '../../components/Modal';

import ModalProduct from '../../components/ModalProduct';



//Timer do search
let searchTimer = null;

export default () => {
    const history = useHistory();
    const [ headerSearch, setHeaderSearch ] = useState('');
    const [ categories, setCategories ] = useState([]);
    const [ products, setProducts ] = useState([]);
    const [ totalPages, setTotalPages] = useState(0);

    const [ modalStatus, setModalStatus ] = useState(false);
    const [ modalData, setModalData ] = useState({});

    const [activeCategory, setActiveCategory ] = useState(0);
    const [ activePage, setActivePage ] = useState(1);
    const [ activeSearch, setActiveSearch ] = useState(''); 

    //Criaremos essa função do lado de fora, 
    //pra facilitar quando eu precisar usar na paginação ou busca eu apenas chamar a função criada
    //Mesmo procedimento cque fiz abaixono getCategories
    const getProducts = async () => {
        const prods = await api.getProducts(activeCategory, activePage, activeSearch);
        if(prods.error === ''){
            //SETANDO O CAMINHO PARA SER EXIBIDO SE NAO TIVER ERRO ACIMA
            setProducts(prods.result.data);
            setTotalPages(prods.result.pages);
            setActivePage(prods.result.page);
        }

    }

    // Ficaremos Monitorando o headerSearch e com temporizado setTimeout de 2s, if headerSearch for 
    // diferente de vazio setar o headerSearch
    useEffect(()=> {

        // Abaixo estou limpando o timer para não duplicar varios timer
        clearTimeout(searchTimer);
        searchTimer = setTimeout(()=> {

            // if(headerSearch != ''){
                setActiveSearch(headerSearch);
                // console.log(headerSearch);
            // }
            }, 2000)
        },[headerSearch]);



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
        // Podemos zerar antes de carregar o array mas não ficou legal, está Habilitado.
        setProducts([]);
        getProducts();
    }, [activeCategory, activePage, activeSearch]);


    //CLICK DE CADA PRODUCT
    const handleProductClick = (data) => {
        setModalData(data);
        setModalStatus(true);
    }
   

    return (
        <Container>
           <Header search={headerSearch} onSearch={setHeaderSearch}/>
          
            {categories.length > 0 &&
                <CategoryArea>
                     {/* Selecione uma categoria({activeCategory} ) */}
                    Selecione uma categoria
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
                                onClick={handleProductClick}                        
                    />
                        ))}
                    </ProductList>
                </ProductArea>
            }


            {/* Paginação */}
            {totalPages > 0 &&
                  <ProductPaginationArea>

                      {/* Dentro do array é o ( totalPages ou 9 para aparecer pag) */}
                      {Array(totalPages).fill(0).map((item, index) => (
                            <ProductPaginationItem
                                 key={index} 
                                 active={activePage}
                                 current={index + 1}
                                 onClick={()=> setActivePage(index+1)}
                                 >
                                {index + 1}
                            </ProductPaginationItem>
                      ))}
                     
                  </ProductPaginationArea>            
            }
            <Modal status={modalStatus} setStatus={setModalStatus}>
               <ModalProduct data={modalData} setStatus={setModalStatus}/>
            </Modal>
               
        </Container>
    );
}