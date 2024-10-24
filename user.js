const users = [];

function addUser({ id, name, active }) {
    if (!id || !name || typeof active !== 'boolean') {
        return null; 
    }
    users.push({ id, name, active });
    return true; 
}

function getUser(id) {
    return users.find(user => user.id === id);
}

function contarUsuariosAtivos() {
    return users.filter(user => user.active).length;
}

module.exports = { addUser, getUser, contarUsuariosAtivos };




// const users = [];
// function addUser({ id, name, active }) {
//     if (!id || !name || typeof active !== 'boolean') {
//         return null; 
//     }
//     users.push({ id, name, active });
//     return true; 
// }

// const result = addUser({ id: 1, name: 'Alice', active: true }); 
// if (result === null) {
//     console.log('Erro: Usuário inválido.');
// }






//RASCUNHOS 1:
// const users = [];
// function addUser({ id, name, active }) {
//     if (!id || !name || typeof active !== 'boolean') {
//         throw new Error('Registro incompleto');
//         /* throw: É uma instrução em JavaScript que permite lançar (ou "jogar") uma exceção. 
//         Quando você utiliza throw, o fluxo normal de execução do código é interrompido 
//         e a execução do programa é interrompida, a menos que a exceção seja tratada por um bloco try...catch.*/
//     }
//     users.push({ id, name, active });
// }

// function getUser(id) {
//     return users.find(user => user.id === id);
// }

// module.exports = { addUser, getUser };
