const { addUser, getUser, contarUsuariosAtivos } = require('./user');

describe('Funções de gerenciamento de usuários', () => {
    beforeEach(() => {
        // Limpa o array de usuários antes de cada teste
        users.length = 0;
    });

    test('adicionar um usuário', () => {
        const result = addUser({ id: 1, name: 'Alice', active: true });
        expect(result).toBe(true);
        expect(getUser(1)).toEqual({ id: 1, name: 'Alice', active: true });
    });

    test('recuperar informações de um usuário', () => {
        addUser({ id: 2, name: 'Bob', active: false });
        const user = getUser(2);
        expect(user).toEqual({ id: 2, name: 'Bob', active: false });
    });

    test('contar usuários ativos', () => {
        addUser({ id: 1, name: 'Alice', active: true });
        addUser({ id: 2, name: 'Bob', active: false });
        addUser({ id: 3, name: 'Charlie', active: true });

        expect(contarUsuariosAtivos()).toBe(2);
    });
});
