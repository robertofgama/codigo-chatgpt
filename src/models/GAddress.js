import Sequelize, { Model } from 'sequelize';

export default class GAddress extends Model {
  static init(sequelize) {
    super.init(
      {
        street: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Campo não pode ser vazio.',
            },
          },
        },
        number: {
          type: Sequelize.STRING,
        },
        neighborhood: {
          type: Sequelize.STRING,
        },
        zipcode: {
          type: Sequelize.STRING,
        },
        reference: {
          type: Sequelize.STRING,
        },
      },
      {
        sequelize,
        tableName: 'g_addresses',
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsToMany(models.BClientRegister, { through: 'b_clients_register', foreignKey: 'addresses_id' });

    this.belongsToMany(models.BClientName, { through: 'b_clients_register', foreignKey: 'address_id' });
    this.belongsToMany(models.GPhone, { through: 'b_clients_register', foreignKey: 'address_id' });
  }
}
