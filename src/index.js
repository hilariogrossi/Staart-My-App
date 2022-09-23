import ReactDOM from 'react-dom';

// Pascal Case: a segunda palavra do componente é em caixa alta.
function App() {
    return <SubTitle />
}; // Todos os componentes do React devem ser declarados com sua
// primeira letra do nome sendo maiúscula.
// Convenções não são regras, são apenas padrões que a comunidade adota
// e decide seguir.
// Nesse caso não se chama a função App(). Usa-se dentro do render <App />

function SubTitle() {
    return <h2>Componente Subtítulo!</h2>
}; // Componentes são funções JavaScript que precisam começar com a primeira letra maiúscula e retornar o código JSX que são os elementos que serão exibidos na tela quando o componente for usado.

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);                  // Pegar o código aqui e fazer aparecer na tela
                    // do usuário.
                    // Render é o processo de converter o código em algo visual, na interface que o usuário verá.
