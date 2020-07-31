import React from 'react';
import {Container, ModalBody} from './styled';

export default ({status,setStatus, children}) => {
    
    // add o onClick na estrutra do modal dentro do Container
    // criamos a função e pegamos o target a classlist que contain e fazemos a condicao
    // se tiver a class ele fechar se nao ele ignora

    const handleModalClick = (e) => {
        if(e.target.classList.contains('modalBG')){
            setStatus(false);
        }
    }

    return (
        <Container

        // Criamos essa class abaixo para fazer um truque com o target no modal fechar apenas quando clica fora
            className="modalBG"
            status={status}
            onClick={handleModalClick}>

                {/* children pega o conteudo que está dentro do modal no arquivo index Homescreen */}
            <ModalBody>
                {children}
            </ModalBody>
        </Container>
    );
}