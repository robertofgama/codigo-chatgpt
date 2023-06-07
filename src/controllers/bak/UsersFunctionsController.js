import UserFunction from '../models/UserFunction';

class UsersFunctionsController {
  async index(req, res) {
    const usersFunction = await UserFunction.findAll();

    res.json(usersFunction);
  }

  async store(req, res) {
    try {
      const userFunction = await UserFunction.create(req.body);
      return res.json(userFunction);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UsersFunctionsController();
