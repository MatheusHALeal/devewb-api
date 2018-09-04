var users = [
user1 = {
    id: 1,
    name: 'Tulla Luana',
},
user2 = {
    id: 2,
    name: 'Paula Viana',
}];

exports.get = (req, res, next) => {
    const response = req.params.id ? users[req.params.id - 1] : users
    res.status(200).send(response);
};

exports.signup = (req, res) => {
	res.status(201).send('Cadastro realizado com sucesso');
};

exports.signin = (req, res) => {
	res.send('Você está logado');
};
