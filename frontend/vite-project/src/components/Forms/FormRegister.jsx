import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function FormRegsiter() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate();
    
    const register = async () => {
        const {data} = await axios.post("http://localhost:3002/login/register",{
                nome,
                email,
                senha
    })
        navigate('/')
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input 
                type="text" 
                placeholder="nome" 
                value={nome} 
                onChange={({target}) => setNome(target.value)}
            />
            <input 
                type="text" 
                placeholder="Email" 
                value={email} 
                onChange={({target}) => setEmail(target.value)}
            />
            <input 
                type="password" 
                placeholder="Senha"
                value={senha} 
                onChange={({target}) => setSenha(target.value)}
            />
            <br/>
            <button onClick={register}>registrar</button>
            <button onClick={() => navigate('/')}>logar</button>
        </form>
    )
}