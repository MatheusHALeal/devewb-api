var events = [
event1 = {
    id: 1,
    name: 'Corrida Naruto',
    description: 'Um rolê muito top',
    date: '12/12/2018',
    location: 'Aldeia da Folha',

},
event2 = {
    id: 2,
    name: 'Congresso de algo muito chato',
    description: 'Um rolê não tão top',
    date: '12/12/2018',
    location: 'Centro de Eventos',
}];

exports.get = (req, res, next) => {
    const response = req.params.id ? events[req.params.id - 1] : events
    res.status(200).send(response);
};

exports.put = (req, res) => {
    res.status(201).send("Evento Criado!");
};

exports.post = (req, res) => {
    res.send("Evento atualizado!");
};

exports.delete = (req, res) => {
    res.send("Evento cancelado!");
};
