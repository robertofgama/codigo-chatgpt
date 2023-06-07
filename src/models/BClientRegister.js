import Sequelize, { Model } from 'sequelize';

export default class BClientRegister extends Model {
  static init(sequelize) {
    super.init(
      {
        client_id: {
          type: Sequelize.INTEGER,
        },
        address_id: {
          type: Sequelize.STRING,
        },
        phones_id: {
          type: Sequelize.STRING,
        },
      },
      {
        sequelize,
        tableName: 'b_clients_register',
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsToMany(models.GAddress, { through: 'b_clients_register', foreignKey: 'client_id' });
    this.belongsToMany(models.GPhone, { through: 'b_clients_register', foreignKey: 'client_id' });
    this.belongsToMany(models.BClientName, { through: 'b_clients_register', foreignKey: 'address_id' });
  }
}
