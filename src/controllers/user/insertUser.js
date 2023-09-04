import user from '../../models/userModel.js'

const insertUser = async (req, res) => {
    try{
        const userData = req.body
        const [result] = await user.create(userData);
        if(result.affectedRows === 1){
            res.json({
                success: "usuario insserido com sucesso",
                user: {
                    id: result.insertId,
                    ...userData
                }
            })
        }
    } catch (error){
        console.log(error)
        res.status(500).json({
            error: "Erro ao buscar usuário"
        })
    }
};

export default insertUser;