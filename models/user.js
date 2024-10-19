const db = require('../config/config');
const User = {};


User.getAll = ()=>{

    //Hace referencia a nuestra base de datos
    const sql = `
    SELECT
    *
    FROM
    users
    `;

    return db.manyOrNone(sql);
}