const initialState = {
        products:[],
        address:[],
        discount:0,
        delivery:0
};

export default (state = initialState, action) => {
    switch(action.type) {

         // COPIA DE PRODUTOS
        case 'ADD_PRODUCT':           
            let products = [...state.products];
        
            //PROCURAR PRO PRODUTOS
            let id = action.payload.data.id;
            let index = products.findIndex(item => item.id === id);
            if(index > -1) {
                products[index].qt += action.payload.qt;
            }else {
                products.push({
                    ...action.payload.data,
                    qt: action.payload.qt
                });
            }

            console.log(products);

            return {...state, products};
            break;

    }

    return state;
}


        // case 'SET_NAME':
        //     return { ...state, name:action.payload.token};
        // break;
        // case 'SET_NAME':
        //     return {...state, name: action.payload.name};
        // break;