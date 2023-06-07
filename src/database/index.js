import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import BClientName from '../models/BClientName';
import GAddress from '../models/GAddress';
import GPhone from '../models/GPhone';
import BClientRegister from '../models/BClientRegister';

const models = [BClientName, GAddress, GPhone, BClientRegister];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
