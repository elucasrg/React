import { useState } from 'react';

function Form() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    function cadastrarUsuario(e, nome) {
        e.preventDefault();
        console.log(nome);
        console.log(password)
        console.log('Cadastrou!!!!!!!!!!!');
    }

    return (
        <>
            <h1>Meu cadastro:</h1>
            <form onSubmit={(e) => cadastrarUsuario(e, name)}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" placeholder="Digite seu nome" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input type="password" placeholder="Digite sua senha" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </>
    );
}

export default Form;