import product from '../../models/productmodel.js'

const deleteProduct = async (req, res) => {
    try{
        const productData = req.body
        const [result] = await product.exclude(productData);
        if(result.affectedRows === 1){
            res.json({
                success: "produto insserido com sucesso",
                product: {
                    id: result.insertId,
                    ...productDataData
                }
            })
        }
    } catch (error){
        console.log(error)
        res.status(500).json({
            error: "Erro ao excluir produto"
        })
    }
};

export default deleteProduct;