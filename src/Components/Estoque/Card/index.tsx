import styles from './Card.module.scss'
import Modal from 'react-modal'
import IFrutas from 'Types/IFrutas'
import { useState } from 'react'
import ILista from 'Types/ILista'
import IPorcao from 'Types/IPorcao'

interface AppProps extends IFrutas, ILista, IPorcao {}

export default function Card({nome, imagem, descricao, preco, quantidade, lista, setLista, porcao, setPorcao }: AppProps ){
    const [abrirModal, setAbrirModal] = useState<boolean>(false)    

    function abrindoModal() {
        setAbrirModal(true)
    }
    function fecharModal(){
        setAbrirModal(false)
    }
    function informaPorcao (){
        const valor = quantidade === 'unidade' ? preco * porcao : (porcao / 1000) * preco
        const pedido = `${porcao} ${quantidade === 'unidade' ? 'unidade' : 'grama'}${porcao>1 ? 's' :''} de ${nome}: R$ ${valor.toFixed(2)} `
        setLista([...lista,{
            id: (lista.length),
            value: pedido,
            valorTotal: valor
        }])
        fecharModal()
    }

    return(
        <div className={styles.card}>
            <h2 className={styles.card__titulo}>{nome}</h2>
            <img className={styles.card__imagem} src={imagem} alt={nome} />
            <p className={styles.card__descricao}>{descricao}</p>
            <p className={styles.card__preco}>R${preco.toFixed(2)}</p>
            <button className={styles.card__botao} onClick={abrindoModal}>Adicionar a lista</button>
            <Modal
                className={styles.modal}
                isOpen={abrirModal}
                onRequestClose={fecharModal}
                ariaHideApp={false}
            >
                <div className={styles.modal__container}>
                    <h2 className={styles.modal__titulo}>Informe a quantidade em { quantidade === 'unidade' ? 'unidade' : 'gramas'} de {nome}</h2>
                    <button onClick={fecharModal} className={styles.modal__fechar}></button>
                </div>
                <form className={styles.modal__formulario}>
                    <p>{quantidade === 'unidade' ? '' : 'Lembrando que 1kg equivale a 1000 g'}</p>
                    <input
                        type={'number'} 
                        className={styles.modal__input}
                        onChange={(e) => setPorcao(Number(e.target.value))}
                    />
                    <input type="button" value="Adicionar a cesta" className={styles.card__botao} onClick={informaPorcao} />
                </form>
            </Modal>
        </div>
        
    )
}