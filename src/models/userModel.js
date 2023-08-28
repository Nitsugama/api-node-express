import db from '../database/db.js';

const getById = async (id) =>{
    return await db.query("SELECT user_name, user_email FROM users WHERE user_id = ?", [id])
};


export default {getById}