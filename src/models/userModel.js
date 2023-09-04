import db from '../database/db.js';

const getById = async (id) =>{
    return await db.query("SELECT user_name, user_email FROM users WHERE user_id = ?;", [id])
};

const create = async (user) =>{
    const {name, email, pass} = user
    return await db.query("INSERT INTO users (user_name, user_email, user_pass) VALUES (?, ?, ?);", [name, email, pass]);
}

const getAll = async () => {
    return await db.query("SELECT user_id, user_name, user_email, user_pass FROM users")
}

export default {getById, create, getAll}