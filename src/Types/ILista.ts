export default interface ILista{
    lista: {
        id: number;
        value: string;
        valorTotal: number;
    }[],
    setLista: React.Dispatch<React.SetStateAction<{
        id: number;
        value: string;
        valorTotal: number;
    }[]>>
}