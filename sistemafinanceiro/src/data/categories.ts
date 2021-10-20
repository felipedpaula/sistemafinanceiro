import { Category } from '../types/Category'

export const categories:Category = {
    food: {
        title: 'Alimentação',
        color: '#FF8F00',
        expense: true
    },
    mobility: {
        title: 'Mobilidade',
        color: '#FFDC00',
        expense: true
    },
    salary: {
        title: 'Salário',
        color: '#50B030',
        expense: false
    },
    gift: {
        title: 'Presente',
        color: '#A430B0',
        expense: false
    }
}