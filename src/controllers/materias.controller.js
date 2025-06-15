const querystring = require('querystring')

const index = (req, res) => {
    const query = querystring.stringify(req.query)

    fetch("https://fakestoreapi.com/products?" + query)
    .then(res => res.json())
    .then(materias => res.render("materias",{materias: materias}));
};

const show = (req, res) => {
   fetch("https://fakestoreapi.com/products/"+ req.params.id)
    .then(res => res.json())
    .then(materia => res.json(materia));
}

module.exports = {
    index,
    show,
};