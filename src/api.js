let BASE = 'https://api.b7web.com.br/devsfood/api';

export default {

    getCategories: async () => {
        //GET / Categories
        const res = await fetch(BASE+'/categories');
        //RESPOSTA
        const json = await res.json();

        return(json);


    }
};