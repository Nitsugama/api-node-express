import user from '../../models/userModel.js'

const listUser = async (req, res) => {
    try{
        const [rows] = await user.getAll()
        if(rows.length === 0){
            res.status(404).json({
                error: `Usuário id:${userData.id} não encontrado`
            });
        } else{
            res.json({
                succes: "Usuário encontrado com sucesso",
                users: rows
            });
        }
    } catch (error){
        console.log(error)
        res.status(500).json({
            error: "Erro ao buscar usuário"
        })
    }
};

export default listUser;