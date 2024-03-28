function Evento(){
        function meuEvento(){
            console.log('Você é um idiota!')
        }
    return (
        <>
        <p>Clique para ler um fato:</p>
        <button onClick={meuEvento}>:D</button>
        </>
    )
}
export default Evento