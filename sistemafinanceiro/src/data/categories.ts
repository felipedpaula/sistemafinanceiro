import { Category } from '../types/Category';

export const categories: Category = {
    food: { 
        title: 'Alimentação', 
        color: 'blue', 
        expense: true 
    },
    fun: { 
        title: 'Lazer', 
        color: 'purple', 
        expense: true 
    },
    home: { 
        title: 'Casa', 
        color: 'brown', 
        expense: true 
    },
    salary: { 
        title: 'Salário', 
        color: 'green', 
        expense: false 
    },
    gift: { 
        title: 'Presente', 
        color: 'green', 
        expense: false 
    },
}