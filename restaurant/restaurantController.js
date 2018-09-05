var restaurant = [
rest1 = {
    id: 1,
    name: 'Icharaku',
    location: 'Aldeia da Folha',

},
rest2 = {
    id: 2,
    name: 'Dona Alba',
    location: 'Pedregal',
}];

exports.get = (req, res, next) => {
    const response = req.params.id ? restaurant[req.params.id - 1] : restaurant
    res.status(200).send(response);
};

exports.put = (req, res) => {
    res.status(201).send("Restaurante criado!");
};

exports.post = (req, res) => {
    res.send("Restaurante atualizado!");
};

exports.delete = (req, res) => {
    res.send("Restaurante descadastrado!");
};
