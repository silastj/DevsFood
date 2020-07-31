Instalando o Tooltip
npm install react-tooltip

Apenas colocar um atributo onde eu quero que seja exibido
Nossa raiz chamamos a biblioteca

Colocaremos ele antes de fechar o container

<ReactTooltip id="tip-top" place="top" effect="solid"/>

id= Nome do tooltip
place= A posicão do tooltip
effect= o efeito percorrendo junto(float) com o mouse ou fixo(solid)

----------------------------------------------------------------------------------
Pegando os Produtos
Configuramos o arquivo da API e criaremos uma funcao getProducts

-----------------------------------------------------------------------------------
Filtros 
Na função do get products passamos (activeCategory, activePage, activeSearch);

e No arquivo Api criaremos um let em array vazio
declaramos os parametros passado acima
criando uma condição, 
 //Transformando o objeto que peguei acima com ( category, page, search)
            // em => ''category=2&page=1search=bolo"
            let queryString = new URLSearchParams(fields).toString();
            //Agora concatenamos com a BASE  passando depois de products

            const res = await fetch(BASE+'/products?'+queryString

---------------------------------------------------------------------------------------
Modal 