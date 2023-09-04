import product from '../../models/productmodel.js'

const updateProduct = async (req, res) => {
    try{
        const productData = req.body
        const [result] = await product.update(productData);
        if(result.affectedRows === 1){
            res.json({
                success: "produto atualizado com sucesso",
                product: {
                    id: result.insertId,
                    ...productDataData
                }
            })
        }
    } catch (error){
        console.log(error)
        res.status(500).json({
            error: "Erro ao atualizar produto"
        })
    }
};

export default updateProduct;