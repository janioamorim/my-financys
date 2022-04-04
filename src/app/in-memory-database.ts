import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from './pages/categories/shared/category.model';


export class InMemoryDatabase implements InMemoryDatabase {
    createDb(){
        const categories: Category[] = [
            {id: 1, name: 'Moradia', description: 'Pagamentos de Contas da casa'},
            {id: 2, name: 'Saúde', description: 'Plano de saúde e remédios'},
            {id: 3, name: 'Lazer', description: 'Cinema, praia...'},
            {id: 4, name: 'Salário', description: 'Entrada de salário'},
        ];
        return { categories };
    }
}