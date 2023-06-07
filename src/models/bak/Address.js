import Sequelize, { Model } from 'sequelize';

export default class Address extends Model {
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
        neighborhood: {
          type: Sequelize.STRING,
        },
        number: {
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
        tableName: 'c_addresses',
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsToMany(models.AClient, { through: 'b_clients_addresses', foreignKey: 'client_id' });
  }
}
