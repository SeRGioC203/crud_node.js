const model = require('../models/category')

const create = (req, res) => {
    res.render('categorias/create');
};

const store = (req, res) => {
    const { name } = req.body;

    model.create(name, (error, id) => {
        if(error) {
            //console.error(error);

            return res.status(500).send("Internal Server Error");
        }

        console.log(id);

        res.redirect("/categorias");
    });
};

const index = (req, res) => { 
    model.findAll((error,categorias) => {
        if(error) {
            return res.status(500).send("Internal Server Error");
        }

        res.render("categorias/index", {categorias});
    });   
};

const show = (req, res) => {
    const { id } = req.params;

    model.findByID(id, (error, categoria) => {
        if(error) {
            return res.status(500).send("Internal Server Error");
        }
        
        if (!categoria) {
        //este return es por si no se encientra se corta la ejecucuion.
        return res.status(404).send('No existe la categoria');
        }
        //por lo tanto el render de la categoria no se ejecuta.

        res.render("categorias/show", {categoria});
    });
};

const edit = (req, res) => {

    const {id} = req.params

    model.findByID(id, (error, categoria) => {
        if(error) {
            return res.status(500).send("Internal Server Error");
        }
        if (!categoria) {
        //este return es por si no se encientra se corta la ejecucuion.
        return res.status(404).send('No existe la categoria');
        }
        //por lo tanto el render de la categoria no se ejecuta.

        res.render("categorias/edit", {categoria});
    });
};

const update = (req,res) => {

    //recibo un id
    const {id} = req.params
    //y un nombre
    const { name } = req.body;

    model.update(id, name, (error, changes) => {
        if(error) {
            return res.status(500).send("Internal Server Error");
        }
        res.redirect('/categorias');
    })
};

const destroy = (req, res) => {
    const {id} = req.params

    model.destroy(id, (error, changes) => {
        if(error) {
            return res.status(500).send("Internal Server Error");
        }
        res.redirect('/categorias');
    })
};

module.exports = {
    index,
    store,
    show,
    create,
    edit,
    update,
    destroy,
};