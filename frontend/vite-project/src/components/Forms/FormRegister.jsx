import { useState } from "react";
import axios from "axios";

export default function FormRegsiter() {
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const validUser = async () => {
        const request = await axios.post("http://localhost:3002/login",{
                nome: "Jose Lopes",
                email: "jose@gmail.com",
                senha: "jo123"
    })
        console.log(request.data);
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Senha"/>
            <br/>
            <button onClick={validUser}>login</button>
            <button>cadastrar</button>
        </form>
    )
}