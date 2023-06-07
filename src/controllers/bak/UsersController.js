import User from '../models/User';
import UserFunction from '../models/UserFunction';

class UsersController {
  async index(req, res) {
    const users = await User.findAll({
      attributes: ['id', 'user_name', 'name', 'email', 'tel'],
      include: {
        model: UserFunction,
        attributes: ['user_function'],
      },
    });
    res.json(users);
  }

  async store(req, res) {
    try {
      const user = await User.create(req.body);
      return res.json(user);
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

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário inexistente'],
        });
      }

      const userUpdated = await user.update(req.body);

      return res.json(userUpdated);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.messge),
      });
    }
  }
}

export default new UsersController();
