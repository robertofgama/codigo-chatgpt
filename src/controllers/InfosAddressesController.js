import GAddress from '../models/GAddress';

class InfosAddressesController {
  async index(req, res) {
    try {
      const addresses = await GAddress.findAll();
      res.json(addresses);
    } catch (e) {
      console.log(e);
      res.json('erro');
    }
  }

  async store(req, res) {
    try {
      const address = await GAddress.create(req.body);
      return res.json(address);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new InfosAddressesController();
