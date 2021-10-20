import { Item } from '../types/Item';

export const items:Item[] = [
    {
        date: new Date(2021, 9, 15),
        category: 'Comida',
        title: 'Bk',
        value: 30.50
    },
    {
        date: new Date(2021, 9, 16),
        category: 'Mobilidade',
        title: 'Gasolina',
        value: 150
    },
    {
        date: new Date(2021, 10, 17),
        category: 'Casa',
        title: 'Compras da semana',
        value: 70
    },
    {
        date: new Date(2021, 10, 20),
        category: 'Lazer',
        title: 'Resenha Amarildo',
        value: 25
    },
    {
        date: new Date(2021, 10, 20),
        category: 'Salario',
        title: 'Salário Empresa',
        value: 2500
    },
];