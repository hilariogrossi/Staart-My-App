//import React from 'react'; {<React.Fragment></React.Fragment> ou <> </>}

import { useState } from 'react'; // useState são chamadas react hooks.

import './styles/App.css';
import './styles/PostForm.css';
import './styles/Feed.css';

import userIcon from './images/user.svg';
import paperPlaneIcon from './images/paper-plane.svg';

import Feed from './components/Feed.js'

// Pascal Case: a segunda palavra do componente é em caixa alta.
export default function App() {
    const [history, setHistory] = useState('');
    const [userName, setUserName] = useState('')
    // const posts = [
    //     {
    //         id: Math.random(),
    //         content: 'Conteúdo do Post',
    //         userName: 'Hilário',
    //         publishedAt: new Date(),
    //     },
    // ];

    const [posts, setPosts] = useState([]);

    function handleSubmit(event) {
        event.preventDefault(); // Previne atualização da página no redirect.
        setPosts([
            ...posts, // Uso do ...(spreed) para manter o post anterior
            {
                id: Math.random(),
                content: history,
                userName, // Como é o mesmo nome pode deixar sem o segundo (userName: userName,)
                publishedAt: new Date(),
            },
        ]);

        setHistory('');
        setUserName('');
    };

    return (
        <div className='wrapper'>
            <form className='post-form' onSubmit={handleSubmit}>
                <input
                    value={history}
                    placeholder='Escreva uma nova história...'
                    onChange={(event) => setHistory(event.target.value)}
                />

                <div>
                    <img src={userIcon} alt="User" />

                    <input
                        value={userName}
                        placeholder='Digite seu nome...'
                        onChange={(event) => setUserName(event.target.value)}
                    />

                    <button type='submit'>
                        <img src={paperPlaneIcon} alt="Paper Plane" />
                        Publicar
                    </button>
                </div>
            </form>

            <main>
                <Feed posts={posts} />

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