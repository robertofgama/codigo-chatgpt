import Sequelize, { Model } from 'sequelize';

export default class UserFunction extends Model {
  static init(sequelize) {
    super.init({
      user_function: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Função já Existe',
        },
        validate: {
          notEmpty: {
            msg: 'Campo não pode ser vazio.',
          },
        },
      },
      description: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
    }, {
      sequelize,
      tableName: 'users_functions',
    });
    return this;
  }

  // static associate(models) {
  //   this.hasOne(models.User, { foreignKey: 'user_function_id' });
  // }
}
