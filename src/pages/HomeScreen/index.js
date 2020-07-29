import React,{ useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Container, CategoryArea , CategoryList} from './styled';
import ReactTooltip from 'react-tooltip';

import Header from '../../components/Header';
import api from '../../api';
import CategoryItem from '../../components/CategoryItem';

export default () => {
    const history = useHistory();
    const [ headerSearch, setHeaderSearch ] = useState('');
    const [ categories, setCategories ] = useState([]);

    const [activeCategory, setActiveCategory ] = useState(0);

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
        </Container>
    );
}