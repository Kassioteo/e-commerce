import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function FormLogin() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    
    const navigate = useNavigate();
    
    const validUser = async () => {
        try{
            const {data} = await axios.post("http://localhost:3002/login",{
                    nome: "Jose Lopes",
                    email,
                    senha
        })
        if (data.message === "validado") {
                return navigate("/");
            }
        } catch({response: {data}}) {
            console.log(data);
            alert(data.message);
        }
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
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
            <button onClick={validUser}>Login</button>
            <button>Cadastrar</button>
            <button onClick={() => navigate('/register')}>Registrar</button>
        </form>
    )
}

