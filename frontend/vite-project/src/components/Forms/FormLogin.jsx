import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function FormLogin() {
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    
    const navigate = useNavigate();
    
    const validUser = async () => {
        try{
            const {data} = await axios.post("http://localhost:3002/login",{
                    nome: "Jose Lopes",
                    email: "kassio@gmail.com",
                    senha: "ka123"
        })
        console.log(data);
        
        if (data.message === "validado") {
                return navigate("/");
            }
            console.log("no");

        } catch({response: {data}}) {
            console.log(data);
            alert(data.message);
        }
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Senha"/>
            <br/>
            <button onClick={validUser}>Login</button>
            <button>Cadastrar</button>
            <button onClick={() => navigate('/register')}>Registrar</button>
        </form>
    )
}

