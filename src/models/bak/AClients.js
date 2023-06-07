import Sequelize, { Model } from 'sequelize';
// import BClientsAddresses from './BClientsAddresses';
// import Address from './Address';

export default class AClient extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Campo não pode ser vazio.',
            },
          },
        },
        nick_name: {
          type: Sequelize.STRING,
        },
        obs: {
          type: Sequelize.STRING,
        },
      },
      {
        sequelize,
        tableName: 'a_clients',
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Address, { through: 'b_clients_addresses', foreignKey: 'address_id' });
  }
}
