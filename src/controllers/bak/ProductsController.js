import Product from '../models/Product';

class ProductsController {
  async index(req, res) {
    const products = await Product.findAll();
    res.json(products);
  }

  async store(req, res) {
    try {
      const product = await Product.create(req.body);
      return res.json(product);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      const product = await Product.findByPk(id);

      if (!product) {
        return res.status(400).json({
          errors: ['Produto inexistente'],
        });
      }

      const productUpdated = await product.update(req.body);

      return res.json(productUpdated);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.messge),
      });
    }
  }
}

export default new ProductsController();
