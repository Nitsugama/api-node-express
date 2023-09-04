import product from '../../models/productmodel.js'

const insertProduct = async (req, res) => {
    try{
        const productData = req.body
        const [result] = await product.create(productData);
        if(result.affectedRows === 1){
            res.json({
                success: "produto insserido com sucesso",
                product: {
                    id: result.insertId,
                    ...productData
                }
            })
        }
    } catch (error){
        console.log(error)
        res.status(500).json({
            error: "Erro ao inserir produto"
        })
    }
};

export default insertProduct;