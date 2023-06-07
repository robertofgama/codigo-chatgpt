import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      user_name: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Usuário Já Cadastrado',
        },
        validate: {
          notEmpty: {
            msg: 'Campo não pode ser vazio.',
          },
        },
      },
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ser vazio.',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail já cadastrado',
        },
        validate: {
          notEmpty: {
            msg: 'Campo não pode ser vazio.',
          },
        },
      },
      tel: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Telefone já cadastrado',
        },
      },

      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'A senha precisa ter entre 5 e 50 caracteres',
          },
        },
      },

    }, {
      sequelize,
      tableName: 'users',
    });

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        // eslint-disable-next-line no-param-reassign
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });
    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }

  // Funcionando
  // static associate(models) {
  //   this.belongsTo(models.User, { foreignKey: 'user_function_id' });
  // }
  static associate(models) {
    this.hasOne(models.UserFunction, { foreignKey: 'id' });
  }
}
