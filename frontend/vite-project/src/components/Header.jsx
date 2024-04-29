import { useNavigate } from "react-router-dom";


export default function Header() {
    const navigate = useNavigate()

    const client = JSON.parse(localStorage.getItem('client'));

    if(client) {
        return(
            <header>
                <h1>E-COMMERCE</h1>    
                <p>seja bem vindo {client.nome}!!</p>
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