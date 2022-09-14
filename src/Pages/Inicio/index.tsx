import Cabecalho from 'Components/Cabecalho';
import Banner from 'Components/Banner';
import Estoque from 'Components/Estoque';
import Rodape from 'Components/Rodape';

export default function Inicio(){
    return (
        <>
            <Cabecalho />
            <Banner />
            <Estoque />
            <Rodape />
        </>
    )
}