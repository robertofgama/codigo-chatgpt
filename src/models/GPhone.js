import Sequelize, { Model } from 'sequelize';

export default class GPhone extends Model {
  static init(sequelize) {
    super.init(
      {
        phone_number: {
          type: Sequelize.INTEGER,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Campo não pode ser vazio.',
            },
          },
        },
        cod_area: {
          type: Sequelize.INTEGER,
        },
        cod_country: {
          type: Sequelize.INTEGER,
        },
      },
      {
        sequelize,
        tableName: 'g_phones',
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsToMany(models.BClientName, { through: 'b_clients_register', foreignKey: 'phones_id' });
    this.belongsToMany(models.GAddress, { through: 'b_clients_register', foreignKey: 'phones_id' });
  }
}
