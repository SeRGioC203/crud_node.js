const { error } = require('console');
const path = require('path');
const sqlite = require('sqlite3');

const db = new sqlite.Database(

    path.resolve(__dirname, '../../preseleccion_verano.db'),
    (error) => {
        if (error) {
            return console.error(error)
        }

        const sql = `CREATE TABLE IF NOT EXISTS categories (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR (100) NOT NULL
        )`;

        db.run(sql, (error) => {

        });
    }
);

module.exports = db;