const path = require("path");

const index = (req, res) => {
    res.render('index');
};

const private = (req, res) => {
    res.sendFile(path.resolve(__dirname,'../../private/index.html'));
};

module.exports = {
    index,
    private,
};