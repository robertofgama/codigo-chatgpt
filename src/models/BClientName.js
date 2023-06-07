import Sequelize, { Model } from 'sequelize';

export default class BClientName extends Model {
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
        tableName: 'b_clients_name',
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsToMany(models.GAddress, { through: 'b_clients_register', foreignKey: 'client_id' });
    this.belongsToMany(models.GPhone, { through: 'b_clients_register', foreignKey: 'client_id' });
    this.belongsToMany(models.BClientRegister, { through: 'b_clients_register', foreignKey: 'client_id' });
  }
}
