import Sequelize, { Model } from 'sequelize';

export default class BClientsAddresses extends Model {
  static init(sequelize) {
    super.init();
    return this;
  }

  // static associate(models) {
  //   this.hasOne(models.AClients, { foreignKey: 'id', as: 'client_id' });
  //   User.belongsToMany(Profile, { through: User_Profile });
  //   Profile.belongsToMany(User, { through: User_Profile });
  // }
}
