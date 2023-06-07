import GPhone from '../models/GPhone';

class InfosPhonesController {
  async index(req, res) {
    try {
      const addresses = await GPhone.findAll();
      res.json(addresses);
    } catch (e) {
      console.log(e);
      res.json('erro');
    }
  }

  async store(req, res) {
    try {
      const address = await GPhone.create(req.body);
      return res.json(address);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new InfosPhonesController();
