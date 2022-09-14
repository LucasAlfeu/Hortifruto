import Card from './Card'
import styles from './Estoque.module.scss'
import frutas from './frutas.json'
import Lista from '../Lista'
import { useState } from 'react'

export default function Estoque(){
    
    const [porcao, setPorcao] = useState(0)
    const [lista, setLista] = useState([{id:0, value:'', valorTotal: 0}])  

    return(
        <section className={styles.estoque}>
            <h2 className={styles.estoque__titulo}>Estoque</h2>
            <section className={styles.estoque__container}>
                    {frutas.map((item) => 
                    <Card  
                        key={item.id}
                        {...item}
                        porcao={porcao}
                        setPorcao={setPorcao}
                        lista={lista}
                        setLista={setLista}
                    /> )}
            </section>            
            <Lista
                lista={lista} setLista={setLista}
            />
        </section>
    )
}