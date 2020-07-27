import React from 'react';
import { Route , useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux';


export default ({ children, ...rest }) => {

    // NÃO ESQUECER DE DECLARAR TUDO QUE CHAMAMOS NO IMPORT
    const history = useHistory();
    const token = useSelector(state => state.user.token);

    // undefined OU VAZIO ELE MANDA PARA LOGIN SE NÃO SEGUE A ROTA NORMAL
    if(!token || token === ''){
        history.push('/login');
        return null;
    }else{
        return <Route {...rest}>{children}</Route>
    }
    // undefined OU VAZIO ELE MANDA PARA LOGIN
    
}

