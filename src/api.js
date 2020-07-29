let BASE = 'https://api.b7web.com.br/devsfood/api';

export default {

    getCategories: async () => {
        //GET / Categories
        const res = await fetch(BASE+'/categories');
        //RESPOSTA
        const json = await res.json();

        return(json);
    },
    getProducts: async () => {
        //Pegando os Products e dentro do Conchetes [ aqui é a filtragem ]
        //GET /api/products ([search, page, category])
        const res = await fetch(BASE+'/products');
        //RESPOSTA
        const json = await res.json();

        return(json);
    }
};