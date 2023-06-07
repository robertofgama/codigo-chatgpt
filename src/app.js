import dotenv from 'dotenv';

dotenv.config();

import './database';

import express from 'express';

// Import Routes
import homeRoutes from './routes/homeRoutes';
import clientsRoutes from './routes/clientsRoutes';
import infosAddressesRoutes from './routes/infosAddressesRoutes';
import infosPhonesRoutes from './routes/infosPhonesRoutes';
// import productsRoutes from './routes/productsRoutes';
// import usersRoutes from './routes/usersRoutes';
// import usersFunctionsRoutes from './routes/usersFunctionsRoutes';
// import tokenRoutes from './routes/tokenRoutes';
// import addressesRoutes from './routes/bak/addressesRoutes';
// import clientsAddressesRoutes from './routes/clientsAddressesRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/clients', clientsRoutes);
    this.app.use('/infos/addresses', infosAddressesRoutes);
    this.app.use('/infos/phones', infosPhonesRoutes);
    // REV
    // this.app.use('/products/', productsRoutes);
    // this.app.use('/users', usersRoutes);
    // this.app.use('/users/functions', usersFunctionsRoutes);
    // this.app.use('/users/tokens', tokenRoutes);
    // this.app.use('/clients/addresses', addressesRoutes);
    // this.app.use('/clients/clientsaddresses', clientsAddressesRoutes);
  }
}

export default new App().app;
