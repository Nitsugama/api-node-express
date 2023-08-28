import user from '../../models/userModel.js'

const getUser = async (req, res) => {
    try{
        const userData = req.body;
        const [rows, fields] = await user.getById(userData.id)
        if(rows.length === 0){
            res.status(404).json({
                error: `Usuário id:${userData.id} não encontrado`
            });
        } else{
            res.json({
                succes: "Usuário encontrado com sucesso",
                user: row[0]
            });
        }
    } catch (error){
        console.log(error)
        res.status(500).json({
            error: "Erro ao buscar usuário"
        })
    }
};

export default getUser;