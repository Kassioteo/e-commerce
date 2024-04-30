import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
    const [search, setSearch] = useState('aaa')
    const navigate = useNavigate()

    const client = JSON.parse(localStorage.getItem('client'));
    const SearchSubmit = (e) => {
        e.preventDefault()
        const {target : {search}} = e
        console.log(search.value);
    }
    if(client) {
        return(
            <header>
                <h1>E-COMMERCE</h1> 
                
                <form onSubmit={ SearchSubmit}>
                <input name="search" type="text" placeholder="Procure aqui !!!................" />
                <button>emoji lupinha</button>
                </form>
                
                <p>seja bem vindo {client.nome}!!</p>
                <>categorias</>
            </header>
            );
    } else {
        return(
            <header>
                <h1>E-COMMERCE</h1>
                <button onClick={ () => navigate('/register')}>ainda nao e cadastrado? Click aqui!!!</button>
                <button onClick={ () => navigate('/login')}>ja tem cadastro? acesse a sua conta!!</button>
            </header>
        );
    }
};