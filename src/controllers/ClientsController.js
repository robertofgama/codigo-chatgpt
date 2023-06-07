import BClientName from '../models/BClientName';
import GAddress from '../models/GAddress';
import GPhone from '../models/GPhone';
import BClientRegister from '../models/BClientRegister';

class ClientsController {
  async index(req, res) {
    const clients = await BClientName.findAll({
      attributes: ['id', 'name', 'nick_name', 'obs'],
    });

    // const result = await User.findOne({
    //   where: { username: 'p4dm3' },
    //   include: Profile,
    // });
    return res.json(clients);
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }
      const client = await BClientName.findByPk(id);

      if (!client) {
        return res.status(400).json({
          errors: ['Cliente não cadastrado'],
        });
      }

      return res.json(client);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.messge),
      });
    }
  }

  async indexClientsName(req, res) {
    try {
      const clients = await BClientName.findAll({
        attributes: ['id', 'name'],
        include: [{
          model: BClientRegister,
          as: 'BClientRegisters',
          attributes: ['id', 'created_at', 'updated_at', 'client_id', 'address_id'],
          include: [{
            model: GAddress,
            as: 'GAddresses',
            attributes: ['id', 'street', 'number', 'neighborhood', 'zip', 'city', 'state', 'country'],
          }, {
            model: GPhone,
            as: 'GPhones',
            attributes: ['id', 'ddd', 'number', 'type'],
          }],
        }],
      });

      return res.json(clients);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'An error occurred while fetching clients.' });
    }
  }

  async storePhone(req, res) {
    try {
      const { id } = req.params;
      const { address_id, phones_id } = req.body;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID Usuário'],
        });
      }

      if (!address_id) {
        return res.status(400).json({
          errors: ['Faltando ID Endereço'],
        });
      }

      if (!phones_id) {
        return res.status(400).json({
          errors: ['Faltando ID Fone'],
        });
      }
      const client_id = id;
      const client = await BClientName.findByPk(id);
      const phone = await GPhone.findByPk(phones_id);
      const address = await GAddress.findByPk(address_id);

      if (!client) {
        return res.status(400).json({
          errors: ['Cliente não cadastrado'],
        });
      }

      if (!phone) {
        return res.status(400).json({
          errors: ['Telefone não cadastrado'],
        });
      }

      if (!address) {
        return res.status(400).json({
          errors: ['Endereço não cadastrado'],
        });
      }

      const newClient = await BClientRegister.create({ client_id, phones_id, address_id });
      return res.json(newClient);
    } catch (e) {
      return res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
  }

  async store(req, res) {
    const client = await BClientName.create(req.body);
    return res.json(client);
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }
      const client = await BClientName.findByPk(id);

      if (!client) {
        return res.status(400).json({
          errors: ['Cliente inexistente'],
        });
      }

      await client.destroy();

      return res.json({ deleted: true });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.messge),
      });
    }
  }
}

export default new ClientsController();
