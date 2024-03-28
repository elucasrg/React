import Item from './Item';
function List () {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Aple" ano_lancamento={2005}/>
                <Item marca="Sansumg" ano_lancamento={2002}/>
                <Item marca="Xaiomi" ano_lancamento={2012}/>
            </ul>
        </>
    )
}
export default List