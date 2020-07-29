import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

import {Container, Menu, PageBody } from './AppStyled';
import PrivateRoute from './components/PrivateRoute';
import MenuItem from './components/MenuItem';
import Cart from './components/Cart';
import ReactTooltip from 'react-tooltip';



import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';

export default () => {
    const name = useSelector(state => state.user.name);

    return (
        <BrowserRouter>
        <Container>
            <Menu>
                <MenuItem title="Loja" icon="/assets/store.png" link="/"/>
                <MenuItem title="Pedidos" icon="/assets/order.png" link="/orders"/>
                <MenuItem title="Meu Perfil" icon="/assets/profile.png" link="/profile"/>
            </Menu>
            <PageBody>
                <Switch>
                    <Route exact path="/">
                        <HomeScreen />
                    </Route>
                    <Route path="/tela2/:nome">
                        <Tela2Screen />
                    </Route>
                    <PrivateRoute path="/orders">
                        <div><h1>Tela de Pedidos</h1></div>
                    </PrivateRoute> 
                    <PrivateRoute path="/profile">
                        <div><h1>Tela de Perfil</h1></div>
                    </PrivateRoute>
                </Switch>
            </PageBody>
            <Cart/>
            <ReactTooltip id="tip-top" place="top" effect="solid"/>
            <ReactTooltip id="tip-right" place="right" effect="float"/>
        </Container>      
        </BrowserRouter>
    );
}