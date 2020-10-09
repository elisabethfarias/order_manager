interface Product {
  id: number;
  name: string;
  price: string;
}

const Products: Product[] = [
  {
    id: 1,
    name: 'Televisão',
    price: 'R$ 1800,00',
  },
  {
    id: 2,
    name: 'Celular',
    price: 'R$ 1400,00',
  },
  {
    id: 3,
    name: 'Notebook',
    price: 'R$ 4000,00',
  },
  {
    id: 4,
    name: 'Apple Watch',
    price: 'R$ 3000,00',
  },
];

export { Products };
export type { Product };
