import product from '../../models/productmodel.js'

const getAllProducts = async (req, res) => {
    try{
        const [rows] = await product.getAll()
        if(rows.length === 0){
            res.status(404).json({
                error: `nenhum produto encontrado`
            });
        } else{
            res.json({
                succes: "produtos encontrados",
                products: rows
            });
        }
    } catch (error){
        console.log(error)
        res.status(500).json({
            error: "Erro ao buscar produtos"
        })
    }
};

export default getAllProducts;