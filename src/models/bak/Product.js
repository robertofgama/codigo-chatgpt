import Sequelize, { Model } from 'sequelize';

export default class Product extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Produto Já existe',
        },
        validate: {
          notEmpty: {
            msg: 'Campo não pode ser vazio.',
          },
        },
      },
    }, {
      sequelize,
      tableName: 'products',
    });
    return this;
  }
}
