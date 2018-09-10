const = require('/user');
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
