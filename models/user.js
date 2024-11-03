const db = require('../config/config');
const User = {};

User.getAll = () => {
    const sql = `
    SELECT
    *
    FROM
    customers
    `;

    return db.manyOrNone(sql);
}

User.create = ({name, email, phone, address}) => {
    const sql = `
    INSERT INTO customers (name, email, phone, address, created_at)
    VALUES ($1, $2, $3, $4, NOW())
    RETURNING id, name, email, phone, address;
    `;

    return db.one(sql, [name, email, phone, address]);

}

User.delete = (id) => {
    const sql = `
    delete from customers
    where id = $1
    returning  id;
    `;

    return db.oneOrNone(sql, [id]);
}

User.update = (id, {
    name, email, phone, address
}) => {
    const sql  = `
    UPDATE customers 
    SET name = $1, email = $2, phone = $3, address = $4
    WHERE id = $5
    RETURNING id, name, email, phone, address;
    `;

    return db.oneOrNone(sql, [name, email, phone, address, id]);
}

User.findUserById = (id) => {
    const sql = `
    SELECT id, name, email, phone, address
    FROM customers
    WHERE id = $1;
    `;

    return db.oneOrNone(sql, [id]);
    // const sql  = `
    // // SELECT 
    // //   customers.id,
    // //   customers.name,
    // //   customers.email,
    // //   customers.phone,
    // //   customers.address,
    // //   FROM customers AS
    // //   INNER JOIN
    // //   user_has_rol
    // //   ON user_has_rol.id_user = customer.id
    // //   WHERE cutomer.id = $1
    // //   GRUP BY
    // //   cutomer.id;
    // `;
}

// User.delete = (id) = {
//     const sql = ``;
// }

module.exports = User;  