import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function FormLogin() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const {data} = await axios.post("http://localhost:3002/login",{
                    email,
                    senha
        })
                console.log(data);
                localStorage.clear()
                localStorage.setItem('client',JSON.stringify(data))
                return navigate("/");
        } catch({response: {data}}) {
            console.log(data);
            alert(data.message);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
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
            <button>logar</button>
            <button onClick={() => navigate('/register')}>Registrar</button>
            <button onClick={() => navigate('/')}>voltar para pagina inicial</button>
        </form>
    )
}

