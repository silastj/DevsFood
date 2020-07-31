let BASE = 'https://api.b7web.com.br/devsfood/api';

export default {

    getCategories: async () => {
        //GET / Categories
        const res = await fetch(BASE+'/categories');
        //RESPOSTA
        const json = await res.json();

        return(json);
    },
    getProducts: async (category, page, search) => {
        //Pegando os Products e dentro do Conchetes [ aqui é a filtragem ]
        //GET /api/products ([search, page, category])
         let fields = {};
            if(category != 0){
                fields.category = category;
            }
            if(page > 0){
                fields.page = page;
            }
            if(search != ''){
                fields.search = search;
            }
            //Transformando o objeto que peguei acima com ( category, page, search)
            // em => ''category=2&page=1search=bolo"
            let queryString = new URLSearchParams(fields).toString();
            //Agora concatenamos com a BASE  passando depois de products

            const res = await fetch(BASE+'/products?'+queryString);
            //RESPOSTA
            const json = await res.json();

            return(json);
    }
};