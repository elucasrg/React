import styles from './Frase.module.css'

function Frase() {
    return (
        <div className={styles.frasecontainer}>
            <p>Está é uma frase que importei de um componente que está dentro de outro componente e segue no diretorio app.js :D</p>
        </div>
    )
}
export default Frase 