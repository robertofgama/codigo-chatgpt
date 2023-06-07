// import BClientsAddresses from '../models/BClientsAddresses';
import AClient from '../models/bak/AClients';
import Address from '../models/Address';

class ClientsAddressesController {
  async index(req, res) {
    // const clientsAddresses = await BClientsAddresses.findAll();
    res.json('clientsAddresses');
  }

  async store(req, res) {
    try {
      // eslint-disable-next-line camelcase
      const { client_id = '', address_id = '' } = req.body;

      console.log('VERIFICANDO CLIENT');
      const client = await AClient.findByPk(client_id);
      if (!client) {
        return res.status(400).json({
          errors: ['Cliente inexistente'],
        });
      }

      console.log('VERIFICANDO ADDRESS');
      const address = await Address.findByPk(address_id);
      if (!address) {
        return res.status(400).json({
          errors: ['Endereço inexistente'],
        });
      }

      // const amidala = await User.create({ username: 'p4dm3', points: 1000 });
      // const queen = await Profile.create({ name: 'Queen' });
      // await amidala.addProfile(queen, { through: { selfGranted: false } });
      // const result = await User.findOne({
      //   where: { username: 'p4dm3' },
      //   include: Profile,
      // });
      // console.log(result);

      console.log('CRIANDO');
      await client.addAddress(address);

      return res.json('ok');
    } catch (e) {
      console.log(e);
      return res.json('Error');
      // return res.status(400).json({
      //   errors: e.errors.map((err) => err.message),
      // });
    }
  }
}

export default new ClientsAddressesController();
