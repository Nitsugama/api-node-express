import db from '../database/db.js';

const getById = async (id) =>{
    return await db.query("SELECT name, desc, stock FROM products WHERE id = ?;", [id])
};

const create = async (product) =>{
    const {name, desc, stock} = product
    return await db.query("INSERT INTO products (name, desc, stock) VALUES (?, ?, ?);", [name, desc, stock]);
}

const getAll = async () => {
    return await db.query("SELECT id, name, desc, stock FROM products;")
}

const exclude = async (id) => {
    return await db.query("DELETE FROM products where id = ?", [id])
}
const update = async (productData) => {
    return await db.query("UPDATE products (id, name, desc, stock) VALUES ('', ?, ?, ?)", [productData.name, productData.desc, productData.stock])
}

export default {getById, create, getAll, exclude, update}