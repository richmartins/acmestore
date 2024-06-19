
interface IProduct {
    id: number;
    title: string;
    price: number;
    desc: string;
    img: string;
    setPrice: (price: number) => void;
    getPrice: () => number;
}

export type {IProduct};