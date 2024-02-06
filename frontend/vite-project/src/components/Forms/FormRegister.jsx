import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function FormRegsiter() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const {data} = await axios.post("http://localhost:3002/login/register",{
                    nome,
                    email,
                    senha
        })  
            localStorage.clear()
            localStorage.setItem('client',JSON.stringify(data))
            navigate('/')
        } catch (err) {
            console.log(err);
            alert(err.response.data.message)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
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
            <button>registrar</button>
            <button onClick={() => navigate('/')}>logar</button>
        </form>
    )
}