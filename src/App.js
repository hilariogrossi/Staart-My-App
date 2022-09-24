import './styles/App.css';
import './styles/PostForm.css';
import './styles/Feed.css';

import userIcon from './images/user.svg';
import paperPlaneIcon from './images/paper-plane.svg';
import clockIcon from './images/clock.svg';


// Pascal Case: a segunda palavra do componente é em caixa alta.
export default function App() {
    const posts = [
        {
            id: Math.random(),
            content: 'Conteúdo do Post',
            userName: 'Hilário',
            publishedAt: new Date(),
        },

        {
            id: Math.random(),
            content: 'Este é o post_2',
            userName: 'Usuário 2',
            publishedAt: new Date(),
        },
    ];

    return (
        <div className='wrapper'>
            <form className='post-form' onSubmit={() => alert('Formulário Submetido!')}>
                <input placeholder='Escreva uma nova história...' />

                <div>
                    <img src={userIcon} alt="User" />

                    <input placeholder='Digite seu nome...' />

                    <button type='submit'>
                        <img src={paperPlaneIcon} alt="Paper Plane" />
                        Publicar
                    </button>
                </div>
            </form>

            <main>
                <header>
                    <h1>Seu Feed</h1>
                    <h2>Acompanhe o que seus amigos estão pensando em tempo real.</h2>
                </header>

                <section className='feed'>
                    {posts.map((post) => (
                        <article key={post.id}>
                            <p>
                                {post.content}
                            </p>

                            <footer>
                                <div className='user-details'>
                                    <img src={userIcon} alt="User" />
                                    <strong> {post.userName} </strong>
                                </div>

                                <div className='time'>
                                    <img src={clockIcon} alt="Clock" />
                                    <span>Publicado em {post.publishedAt.toLocaleDateString('pt-br')} </span>
                                </div>
                            </footer>
                        </article>
                    ))}

                </section>

            </main>
        </div>); /* Dentro da div para fazer css =  style={{
        color: 'red',
        fontSize: 50,
    }}*/
}; // Todos os componentes do React devem ser declarados com sua
// primeira letra do nome sendo maiúscula.
// Convenções não são regras, são apenas padrões que a comunidade adota
// e decide seguir.
// Nesse caso não se chama a função App(). Usa-se dentro do render <App />

// Ou exportar aqui em baixo:
// export default App;