import styles from './Lista.module.scss'
import ILista from 'Types/ILista'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Toaster, toast} from 'react-hot-toast';

export default function Lista({lista, setLista}: ILista){
    const listaValores = lista.map(item => item.valorTotal)
    const somaTotal = listaValores.reduce((acumulador, elemento) => acumulador + elemento, 0)
    const listaProdutos = String(lista.map(item => item.value))

    return (       
        <div className={styles.lista__container} >
            <article  className={styles.lista} >
                <h2 className={styles.lista__titulo}>LISTA</h2>
                <div className={styles.lista__itens} >
                    {lista.map(item => 
                        <div onChange={(e) => e.target} key={item.id} >{item.value}</div>                    
                    )}
                </div>
                <p className={styles.lista__preco}>
                    {`R$ ${somaTotal.toFixed(2)}`}
                </p>
            </article>
            <CopyToClipboard text={`${listaProdutos } - TOTAL: R$ ${somaTotal.toFixed(2)}`} >
                <button className={styles.lista__finalizar} onClick={() => 
                    toast(lista.length === 0 ? 'Sem itens na lista' : 'Lista Copiada', {
                    duration: 4000,
                    position: 'bottom-right',
                    className: styles.lista__toast,
                    ariaProps: {
                        role: 'status',
                        'aria-live': 'polite',
                    }
                })}>Finalizar o Pedido</button>
            </CopyToClipboard>

            <Toaster />
        </div>
    )
}