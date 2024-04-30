export default function Produto(params) {
    return (
        <div>
            <img src={params.image} alt={params.nome} />
            <section>
                <div>
                {params.nome}
                <br />
                {params.avaliacao}                
                </div>
                <div>
                    <button onClick={() => params.favoritar()}>emoji</button>
                    <button onClick={() => params.carrinho()}>emoji</button>
                </div>
                <br />
                <div>
                    {params.preco}
                    <br />
                    {params.descricao}
                </div>
            </section>
        </div>
    )  
};