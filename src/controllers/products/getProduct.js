import product from '../../models/productmodel.js'

const getProduct = async (req, res) => {
    try{
        const productData = req.body;
        const [rows, fields] = await product.getById(productData.id)
        if(rows.length === 0){
            res.status(404).json({
                error: `produto id:${productData.id} não encontrado`
            });
        } else{
            res.json({
                succes: "produto encontrado com sucesso",
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

export default getProduct;