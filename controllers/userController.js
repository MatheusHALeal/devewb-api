exports.get = (req, res, next) => {
    const user1 = {
        id: 1,
        nome: 'Tulla Luana',
    }
    const response = req.params.id ? user1 : 'mulher, nem isso tem aqui'
    res.status(201).send(response);
};