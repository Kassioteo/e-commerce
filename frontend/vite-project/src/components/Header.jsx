import { useNavigate } from "react-router-dom";

const navigate = useNavigate()

export default function Header() {
    return(
        <>
        <h1>E-COMMERCE</h1>
        <button onClick={ () => navigate('/login')}>ainda nao e cadastrado? Click aqui!!!</button>
        <button onClick={ () => navigate('/login')}>ja tem cadastro? acesse a sua conta!!</button>
        </>
    );
};